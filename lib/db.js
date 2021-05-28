'use strict'

const { MongoClient } = require('mongodb')
const config = require('../config')
const { dbUser, dbPassword, dbHost, dbName, dbPort } = config

//`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
//`mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
const mongoUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}` 
let connection

class MongoLib {
  constructor() {
  	this.client = new MongoClient(mongoUrl, {
  	  useNewUrlParser: true,
      useUnifiedTopology:true
  	})
  	this.dbName = dbName
  }

  connect() { // Singleton pattern
	if(!MongoLib.connection) {
	  MongoLib.connection = new Promise(( resolve, reject ) => {
		this.client.connect(err => {
		  if(err) {
			reject('MongoDB instance error ', err)
		  }
		  console.log('Connected succesfully to Mongo')
		  resolve(this.client.db(this.dbName))
		})
	  })
    }

    return MongoLib.connection
  }
}

module.exports = MongoLib

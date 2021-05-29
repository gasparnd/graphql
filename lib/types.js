'use strict'

const { ObjectID } = require('mongodb')
const MongoLib = require('./db')

module.exports = {
  Course: {
  	people: async ({ people }) => {
  	  try {
  	  	if(!people || people.lenght === 0) return []

        const db = await new MongoLib().connect()
        let ids = people.map(id => ObjectID(id))
        let peopleData = await db.collection('students').find(
  		  { _id: { $in: ids } }
        ).toArray()

        return await peopleData
  	  } catch(err) {
  	  	console.error(err)
  	  }
  	}
  },
  Person: {
    __resolveType: (person, context, info) => {
      if(person.phone) {
      	return 'Monitor'
      }

      return 'Student'
  	}
  }
}
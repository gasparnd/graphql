'use strict'

const { ObjectID } = require('mongodb')
const MongoLib = require('./db')

module.exports = {
  Query: {
    Courses: async () => {
      try {
      	let db = await new MongoLib().connect()
      	let courses = []
      	console.log(db)
      	courses = await db.collection('courses').find().toArray()

      	console.log(courses)
      	return await courses
      } catch(err) {
      	console.error('Failed fetch data from MongoDB ', err)
      } 
    },
  	Course: async (root, { id }) => {
  	  try {
      	let db = await new MongoLib().connect()
      	let course
      	console.log(db)
      	course = await db.collection('courses').findOne({ _id: ObjectID(id) })

      	console.log(course)
      	return await course
      } catch(err) {
      	console.error('Failed fetch data from MongoDB ', err)
      }
    }
  }
}

'use strict'

const { ObjectID } = require('mongodb')
const MongoLib = require('./db')

module.exports = {
  Courses: async () => {
    try {
      const db = await new MongoLib().connect()
      const courses = await db.collection('courses').find().toArray()

      return await courses
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    } 
  },
  Course: async (root, { id }) => {
  	try {
      const db = await new MongoLib().connect()
      const course = await db.collection('courses').findOne({ _id: ObjectID(id) })

      return await course
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    }
  },
  Students: async () => {
    try {
      const db = await new MongoLib().connect()
      const students = await db.collection('students').find().toArray()

      return await students
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    } 
  },
  Student: async (root, { id }) => {
  	try {
      const db = await new MongoLib().connect()
      const student = await db.collection('students').findOne({ _id: ObjectID(id) })

      return await student
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    }
  }
}
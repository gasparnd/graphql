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
  People: async () => {
    try {
      const db = await new MongoLib().connect()
      const People = await db.collection('students').find().toArray()

      return await People
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    } 
  },
  Person: async (root, { id }) => {
  	try {
      const db = await new MongoLib().connect()
      const person = await db.collection('students').findOne({ _id: ObjectID(id) })

      return await person
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    }
  },
  searchItems: async (root, { keyword }) => {
    try {
      const db = await new MongoLib().connect()
      const courses = await db.collection('courses').find(
        { $text: { $search: keyword } }
      ).toArray()
      const people = await db.collection('students').find(
        { $text: { $search: keyword } }
      ).toArray()

      const items = [...courses, ...people]

      return await items
    } catch(err) {
      console.error('Failed fetch data from MongoDB ', err)
    }
  }
}
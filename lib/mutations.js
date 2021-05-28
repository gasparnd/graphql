'use strict'

const { ObjectID } = require('mongodb')
const MongoLib = require('./db')

module.exports = {
  createCourse: async (root, { input }) => {
  	const defaults = {
  	  teacher: '',
  	  topic: ''
  	} // creo los items por defaults, items que no son obligatorios

  	const newCourse = Object.assign(defaults, input) // asignamos el objeto con los inputs y los defaults

  	try {
  	  const db = await new MongoLib().connect() // coneccion con DB
  	  const course = await db.collection('courses').insertOne(newCourse) // agregamos el curso a la DB
  	  newCourse._id = course.insertedId // le agregamos un ID al curso
  	  return newCourse
  	} catch(err) {
  	  console.error('Failed create course ', err)
  	}
  },
  updateCourse: async (root, { _id, input }) => {
    try {
      const db = await new MongoLib().connect()
      const updateCourse = await db.collection('courses').updateOne(
        { _id: ObjectID(_id) },
        { $set: input }
      )
      const course = await db.collection('courses').findOne({ _id: ObjectID(_id) })

      return await course
    } catch(err) {
    	console.error('Failed update course ', err)
    }
  },
  deleteCourse: async (root, { _id }) => {
    try {
      const db = await new MongoLib().connect()
      const courseDeleted = await db.collection('courses').deleteOne({ _id: ObjectID(_id)})

      return 'Course deleted'
    } catch(err) {
    	console.error('Failed delete course ', err)
    }
  },
  createStudent: async (root, { input }) => {
  	try {
  	  const db = await new MongoLib().connect()
  	  const student = await db.collection('students').insertOne(input)
  	  input._id = student.insertedId 

  	  return input
  	} catch(err) {
  	  console.error('Failed create student ', err)
  	}
  },
  updateStudent: async (root, { _id, input }) => {
    try {
      const db = await new MongoLib().connect()
      const updateStudent = await db.collection('students').updateOne(
        { _id: ObjectID(_id) },
        { $set: input }
      )
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) })

      return await student
    } catch(err) {
    	console.error('Failed update course ', err)
    }
  },
  deleteStudent: async (root, { _id }) => {
  	try {
      const db = await new MongoLib().connect()
      const studentDeleted = await db.collection('students').deleteOne({ _id: ObjectID(_id)})

      return 'Student deleted'
    } catch(err) {
    	console.error('Failed delete student ', err)
    }
  }
}
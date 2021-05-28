'use strict'

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
  }
}
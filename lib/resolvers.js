'use strict'

const courses = [
  {
  	_id: 'anyid',
    title: 'Advance React Course',
    teacher: 'Gaspar Dolcemascolo',
    description: 'We will make a mobile app wit React, Styled components and GraphQL',
    topic: 'React'
  },
  {
  	_id: 'anyid2',
    title: 'Advance React Course 2',
    teacher: 'Gaspar Dolcemascolo',
    description: 'We will make a mobile app wit React, Styled components and GraphQL',
    topic: 'React'
  },
  {
  	_id: 'anyid3',
    title: 'Advance React Course 3',
    teacher: 'Gaspar Dolcemascolo',
    description: 'We will make a mobile app wit React, Styled components and GraphQL',
    topic: 'React'
  }
]

module.exports = {
  Query: {
    Courses: () => {
      return courses
    },
  	Course: (root, args) => {
  	  const course = courses.find(course => course._id === args.id)
  	  return course
    }
  }
}

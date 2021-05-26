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
  	_id: 'anyid',
    title: 'Advance React Course 2',
    teacher: 'Gaspar Dolcemascolo',
    description: 'We will make a mobile app wit React, Styled components and GraphQL',
    topic: 'React'
  },
  {
  	_id: 'anyid',
    title: 'Advance React Course 3',
    teacher: 'Gaspar Dolcemascolo',
    description: 'We will make a mobile app wit React, Styled components and GraphQL',
    topic: 'React'
  }
]

module.exports = {
  Courses: () => {
    return courses
  }
}

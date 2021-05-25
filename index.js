'use strict'

const { graphql, buildSchema } = require('graphql')

// schema defined

const schema = buildSchema(`
  type Query {
    hello: String,
    greet: String
  }
`)

// Resolvers config

const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  greet: () => {
  	return 'Hello every one'
  }
}

// run query hello

graphql(schema, '{ greet }', resolvers).then((data) => {
  console.log(data)
})
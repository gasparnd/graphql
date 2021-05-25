'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const port = process.env.PORT || 3000

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

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is linstening on: http://localhost:${port}/api`)
})
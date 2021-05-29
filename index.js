'use strict'

const config = require('./config')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const isDev = process.env.NODE_ENV.trimRight() !== 'production'
const port = config.port || 3000

// schema defined

const typeDefs  = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors())

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log(`Server is linstening on: http://localhost:${port}/api`)
})
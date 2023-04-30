/** @format */

const express = require("express")
const res = require("express/lib/response")
const app = express()
const PORT = 5000
const { ApolloServer } = require("apollo-server-express")
const { resolvers, typeDefs } = require("./schema")

app.get("/", (req, res) => {
  return res.send("Home Page")
})

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  server.applyMiddleware({ app, path: "/graphql" })
  console.log(
    `APOLLO SERVER IS RUNNING AT http://localhost:${5000}${server.graphqlPath}`
  )
}
startApolloServer()

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT http://localhost:${5000}`)
})

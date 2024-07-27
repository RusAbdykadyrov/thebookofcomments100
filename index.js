const { ApolloServer } = require ('apollo-server')
const mongoose = require( 'mongose')
const typeDefs = require('./graphQL/tupeDefs')
const resolvers = require('./graphQL/resolvers')
const MONGODB = 'mongodb+srv://abdykadyrovruslan:Rembo1419!@cluster0.vgf76ka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const server = new ApolloServer ({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
  console.log("MongoDB Connection successful");
  return server.listen({port: 5000})
})
.then((res) => {
  console.log(`Server running at ${res.url}`);
})
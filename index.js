const { ApolloServer } = require('apollo-server');
const mongoose= require('mongoose')
const typeDefs = require('./graphql/resolvers/typeDefs')
const resolvers = require('./graphql/resolvers')
const MONGODB = 'mongodb+srv://abdykadyrovruslan:Rembo1419!@cluster0.vgf76ka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const server =new ApolloServer( {
  typeDefs,
  resolvers
})
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB()
server.listen({port: 5000}).then(({ url }) => {
  console.log(`:rocket:  Server ready at ${url}`);
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require("dotenv").config()
const { MongoClient } = require("mongodb")

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGO_URI
const client = new MongoClient(uri)

async function run(response) {
  try {
    await client.connect()

    const database = client.db("sample_mflix")
    const collection = database.collection("movies")

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" }
    const movie = await collection.findOne(query)
    response = movie
    // console.log(movie)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

exports.handler = (event, context) => {
  console.log(event.body)
  let response = "Nothing here"
  run(response).catch(console.dir)
  console.log(typeof response)
  const body = JSON.parse(event.body)
  return { statusCode: 200, body: response }
}

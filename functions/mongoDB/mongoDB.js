// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = (event, context) => {
  console.log(event.body)
  const body = JSON.parse(event.body)
  return { statusCode: 200, body: `Hello there, ${body.first} ${body.last}` }
}

exports = function(modelObjectName, query) {
  const mongodb = context.services.get("mongodb-atlas");

  const factCollection = mongodb.db("gbdb").collection(modelObjectName);

  const parsedQuery = JSON.parse(query);
  const projection = { "_id": 0, "modelID": 1};

  console.log(parsedQuery)

  return factCollection.find(parsedQuery, projection)
    .toArray()
    .then(result => {
      //console.log(`Successfully found ${result.length} documents.`)

      return JSON.stringify(result);
    })
    .catch(err => console.error(`Failed to find document: ${err}`));
}
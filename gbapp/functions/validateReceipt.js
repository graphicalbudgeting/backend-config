exports = async function(url, receiptData, password) {
  const response = await context.http.post({
    url: url,
    body: {"receipt-data": receiptData, "password": password, "exclude-old-transactions": true},
    encodeBodyAsJSON: true
  })
  // The response body is a BSON.Binary object. Parse it and return.
  return EJSON.parse(response.body.text());
};
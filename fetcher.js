const request = require('request');
const fs = require('fs');
const content = 'Hello world!'
fs.writeFile('file.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  });
request('http://www.google.com', function (error, response, body) {
    fs.writeFile('google.html', body, error => {
        if (error) {
            console.error(error)
            return
        }
    })
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
});
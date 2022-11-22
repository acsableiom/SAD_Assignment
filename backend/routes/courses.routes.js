var express = require('express');
var router = express.Router();
 
// GET at the root just to demonstrate
router.get('/', function(req, res, next) {
   res.send('got a GET request at /');
});

// GET list of courses to show that we're up and running
router.get('/course', function(req, res, next) {
  res.send('Got a GET request at /courses');
});
 
// accept POST request and add a new animal to the db
//router.post('/courses', upload.array(), function (req, res) {
//    res.send('Got a POST request at /courses');
//});
 
// accept PUT request at /courses
router.put('/courses', function (req, res) {
 res.send('Got a PUT request at /courses');
});
 
 
// accept DELETE request at /courses
router.delete('/courses', function (req, res) {
 res.send('Got a DELETE request at /courses');
});
 
module.exports = router;

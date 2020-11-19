const axios = require('axios');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1ZmFjYmZhOTcxNjIwNjAwMTc2ZjgxOGQiLCJpYXQiOjE2MDU3NDcxOTgsImV4cCI6MTYwNTc1MDc5OH0.0VgSBMSOMflv3In3xBEfn6imiZi2QsIL2bRHPINFLdQ'
const url = "https://mighty-fortress-94413.herokuapp.com/feed/posts"
const data = {name: "Ranjan Kumar",
email: "anirban@gmail.com",
password:"12345678"}
axios.get(url, {
    headers: {
      Authorization: token
    }
  })
  .then(data => {
      console.log(data)
  })
  .catch(data => {
      console.log(data)
  })
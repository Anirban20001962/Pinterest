const axios = require('axios');
const url = "https://mighty-fortress-94413.herokuapp.com/auth/signup"
const data = {name: "Ranjan Kumar",
email: "anirban@gmail.com",
password:"12345678"}
axios.post(url,data)
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})
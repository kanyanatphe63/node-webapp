//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5MzYzNjIxLCJleHAiOjE2NTkzNjcyMjEsIm5iZiI6MTY1OTM2MzYyMSwianRpIjoiQk5USG52bnJlUlQ1TTFoZSIsInN1YiI6MTMyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.q7Pp43xpM-nGo4l8XopvoS8wFwVaQGTA4O_3Utih2xQ"; // put access token
const student = {
    student_id: '63364062',
  name: 'Phongsatorn Teanson', // replace with your full name.
  age: 19, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
    //-- call external api 
            request({
              method: "GET",
              uri: EXTERNAL_API+student_id,
              headers: {
                  Authorization: `Bearer ${accessToken}`
              }
          }).then((response) => {
              console.log('Sent');
              console.log({
                  "request": student_id,
                  "response": response
              });
  
             cb(response);
  
          }).catch((err) => {
              console.log('Error:', err.message);
              console.log({
                  "Error": err.message
              });
          });
  }

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}
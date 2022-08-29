React Forms and saving data into Mongodb database.
Implementation of React-Router-DOM 

#INTRODUCTION

This application consists of simple login/signUp feature using mongodb database.
On the home page, there will be 2 buttons, which will take user to Login if user is alraedy registered. Else, user will land into a Signup page.
Once the user signup, he/she will need to go to LoginPage to proceed further.
I have also used React-Router-DOM library for the navigation.

#REQUIREMENT

LOGIN/SIGNUP Functionality using Mongodb

#External Packages Used

Frontend-
1)axios
2)react-router-dom

Backend-
1)express
2)cors
3)mongoose
4)body-parser


#STRUCTURE

A)FRONTEND

As reactJS is used for the implementation of UI, following is the structure:-
1)App.js includes all the routes path
2)In the component folder, there are 3 files for home, signup and login feature.
3)ALl are function based component.
4)For calling API, axios is used in the frontend.
5)Basic hook is used, as the task was simple-useState
Please ignore the store folder and redux code.
6)To start Frontend use command- npm start

B)BACKEND

Backend Logic is in the server folder.

1) For the backend, express framework is used to handle routes.
Currently we have 2 routes,to handle request which is comming from frontend.
1) '/login' - if credentials match, user will successfully login.
2) '/register' - will save new user to collection.

2) Apart from that,cors middleware is used for inter domain communication.
And body-parser is used for the getting data which is coming through HTTP 
req.body  
3) The schema has been defined in the schema folder.
 The database name is 'MyCompanyDBName' which can later be chnaged. 
4) Also there were only 2 backend API, so those routes are in app.js
5) Tested the apis on postman.
6) To start backend, use node app.js

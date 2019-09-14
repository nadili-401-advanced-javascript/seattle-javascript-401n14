# DEMOS - Socket.io Client

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Q Server
* Open the Q server code from Block 4
* Do a quick code review with the students
* Demonstrate that the Q server itself is deployed
  * https://q-js401.herokuapp.com

## API Server
* Open the API server code from Block 3
* Do a quick code review with the students
* Demonstrate that the API server itself is deployed
  * https://api-js401.herokuapp.com

## React App
* (Silently) Edit the `.env` file to point to the deployed Q Server
* Launch the app
* Don't show the code to the students
* Just show the app working

## Work with Data
* Open postman and POST,PUT,DELETE records into `/api/v1/teams` and `/api/v1/players`
* As you do this, the react app will list out your actions in a series of list items

This is cool stuff -- 2 separate servers and a separate client all talking to one another.


### Fortune Back
#### Backend for React.js with Express Authentication and Authorization
--

### Description
#### Server side employed Node.js Express. Secured authentication with jsonwebtoken(JWT) was utilized. Sequelize for interacting with MySQL db.

###  Technology
- Express
- bcryptjs
- jsonwebtoken
- Sequelize
- MySQL

### Directory Structure
- config: configure MySQL db, Sequelize and Auth Key
- routes: post routes for signup and signin with public and protected routes
- middlewares: verifysignup.js to check duplicate username or email and authJwt.js to verify token and userrole in db
- controllers: controllers to handle signup and signin actions and also return public or protected resources
- models: useful for sequelize contracting
- server.js: to import all neccesary modules, initialize app and routes and listen for ocnnections

### Project 


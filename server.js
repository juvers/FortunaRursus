const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors())
    // app.use(cors(corsOptions));

//  app.use(function(req, res, next) {
//      res.header("Access-Control-Allow-Origin", "*");
//      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//      next();
// });

// app.options('*', cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



const db = require("./app/models");
const Role = db.role;

db.sequelize.sync().then(() => {
    console.log('Drop and Resync Db');
    initial();
});


function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}



// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the fortune application." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8087;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
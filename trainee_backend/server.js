require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs=require("fs");
const https=require("https");

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
};
const sslServer = https.createServer({
 key: fs.readFileSync('./openssl/server.key'),
 cert: fs.readFileSync('./openssl/server.crt'),
},
app

)



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const db_confg = require("./app/config/db.config.js");
console.log("HY........................................");
console.log(db_confg.HOST);
console.log(db_confg.DB);



db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to react node mysql application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
sslServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

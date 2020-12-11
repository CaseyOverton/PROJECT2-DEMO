
require("path");
const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app); 

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log(`Listening on: ${PORT}`)
    });
    });
  module.exports = app;
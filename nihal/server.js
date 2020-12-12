  

require("path");
const express = require("express");
const db = require("./models");
const php = require('php')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'php')
app.engine('php', php.__express)


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app); 

app.get('/table', (req, res) => {
  res.render('table.php')
})

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log(`Listening on: ${PORT}`)
    });
    });
  module.exports = app;
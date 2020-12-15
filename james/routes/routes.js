// const config = require("../config/config.json");
// const path = require("path"); 
const Item = require("../models/model");

module.exports = function(app) {
    app.get("/api/all", (req, res) => {
        Item.findAll({}).then(function(results) {
            res.json(results);
        });
    });
};
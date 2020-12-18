const Item = require("../models/model");

module.exports = function(app) {
    app.get("/api/newseller", (req, res) => {
        Item.findAll({}).then(function(results) {
            res.json(results);
        });
    });
};
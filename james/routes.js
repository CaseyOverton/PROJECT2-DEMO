const config = require("../config/config.json");
const path = require("path"); 

module.exports = function(app) {
    app.get("/api/all", (req, res) => {
        const query = 'SELECT * FROM buyers WHERE purchased = false';

        connection.query(query, (err, result) => {
            if (err) throw err;

            res.json(result); 
        });
    });
}
const User = require('../models/User');

module.exports = function(app) {
    
    // Send all User id and usernames to client
    app.get('/api/user', function(req, res) {
        User.find({}, '-password')
        .then(function (data) {
            res.json({ status: 200, data: data, message: 'Users data retrieved successfully' });
        })
        .catch(function (err) {
            res.json({ status: 500, message: err });
        });        
    });
}
// Users CRUD

const User = require('../models/users.model');
// list users
module.exports.list = (req, res) => {
    User.find()
        .then((users) => {
            res.render("users/list", {
                title: 'Welcome to Users list',
                users
            });
        })
        .catch(() => {
            //TODO
        });

};

// user detail
module.exports.detail = (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.render("users/detail", { user })
        })
        .catch(() => {});
};

// user create
module.exports.create = (req, res) => {};

// user update
module.exports.update = (req, res) => {};

// user delete
module.exports.delete = (req, res) => {};
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../data/users.json');

/* GET admin listing. */
router.get('/', function (req, res, next) {
    res.render('admin', { title: 'Admin' });
});

/* GET all users page. */
router.get('/all-users', function (req, res, next) {
    try {
        const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
        console.log(users); // Log the users to verify the data
        res.render('admin/all-users', { title: 'All Users', users: users });
    } catch (error) {
        console.error('Error reading users file:', error);
        res.status(500).send('Error reading users data');
    }
});

/* GET add product page. */
router.get('/add-product', function (req, res, next) {
    res.render('admin/add-product', { title: 'Add Product' });
});

/* Logout and redirect to index page. */
router.get('/logout', function (req, res, next) {
    res.redirect('/');

});

module.exports = router;

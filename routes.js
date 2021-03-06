const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // res.end('Hello World');
    res.render('index.ejs');
});
//Ruta Login '/login'
router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;
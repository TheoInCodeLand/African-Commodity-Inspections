const express = require('express');
const router = express.Router();

// Home Page Route
router.get('/', (req, res) => {
    // Pass data to the EJS view
    const pageData = {
        title: "Welcome to My EJS Site",
        message: "This is a dynamic message passed from Node.js!"
    };
    
    // Render the 'index.ejs' file
    res.render('index', pageData);
});

module.exports = router;
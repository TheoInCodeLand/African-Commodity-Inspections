const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Import Routes
const indexRoutes = require('./routes/index');

// Middleware: Set View Engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware: Serve Static Files (CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', indexRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
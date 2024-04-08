// This file is the main server file for the application 
// Sets up routes and servers fot the application
const express = require('express');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(html_routes);
app.use(api_routes);

// stars the server on the prot
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

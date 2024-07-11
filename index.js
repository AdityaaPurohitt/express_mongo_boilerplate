const express = require('express');
const connectDB = require('./config/db');
const routes = require('./route/route');
require('dotenv').config();

const app = express();

// Mongoo connection 
connectDB();

app.use(express.json());

// routes
app.use('/api/', routes);

let port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

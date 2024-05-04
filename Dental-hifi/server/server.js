const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();  
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.json ({"users": ["user1", "user2", "user3"]});
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const ItemRoutes = require('./routes/ItemRoutes');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api', ItemRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // list for request from the client
        app.listen(process.env.PORT, () => {
            console.log(`Connect to MongoDB and listening on port ${process.env.PORT}`);
        })
    })


    .catch((error) => {
        console.log(error);
    })
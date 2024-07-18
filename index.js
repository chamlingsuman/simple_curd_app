require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/Product.js');
const productRoute = require('./routes/productRoute.js');
const app = express()
const port = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);



app.get('/', (req, res) => {
    res.send('Hello from Node API Server');
});

mongoose.connect("mongodb+srv://srai:uG6ahIWUf9LAHkse@cluster0.esl1op0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to database!");
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
})
.catch(() => {
    console.log("Connection Failed!");
});
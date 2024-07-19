require('dotenv').config();
const express = require('express')
//const mongoose = require('mongoose');
const db = require('./config/dbconfig');
const path = require('path');

const Product = require('./models/Product.js');
const productRoute = require('./routes/productRoute.js');
const userRoute = require('./routes/userRoute.js');
const app = express()
//const port = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
router.post('/login', mainController.login);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);



app.get('/', (req, res) => {
    res.send('Hello from Node API Server');
});


/*mongoose.connect("mongodb+srv://srai:uG6ahIWUf9LAHkse@cluster0.esl1op0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to database!");
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
})
.catch(() => {
    console.log("Connection Failed!");
});*/


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', path.join(__dirname, 'views'));


// Initialize the database connection pool
db.initialize().then(() => {
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to initialize the database', err);
  process.exit(1);
});


// Handle process exit and close the database connection pool
process.on('SIGINT', async () => {
  try {
    await db.close();
    console.log('Database connection pool closed, exiting process');
    process.exit(0);
  } catch (err) {
    console.error('Error closing database connection pool', err);
    process.exit(1);
  }
});

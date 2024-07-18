const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const dbConfig = {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}

//Initialize MongoDB connection
async function initialize() {
    try{
        await mongoose.connect(dbConfig.uri, dbConfig.options);
        console.log('Connected to MongoDB');
    } catch(error){
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
}

//Close MongoDB connection
async function close(){
    try{
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch(error){
        console.error('Error closing MongoDB connection', error);
    }
}

module.exports = {
    initialize,
    close
};
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    Caste: {
        type: String,
        required: false
    },
    contact_no: {
        type: String,
        required: false
    } 
},
{
    timestamps: true
}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
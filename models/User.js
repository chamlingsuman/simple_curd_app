const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.SchemaType({
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

const User = mongoose.model('User', userSchema);

module.exports = User;
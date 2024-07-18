const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

const {createUser, getUsers} = require("../controllers/userController.js");


router.post('/', createUser);

router.get('/', getUsers);


module.exports = router;

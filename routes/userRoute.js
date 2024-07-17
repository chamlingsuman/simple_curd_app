const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();

const {createUser} = require("../controllers/userController.js");


router.post('/', createUser);
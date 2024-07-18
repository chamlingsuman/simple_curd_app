const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

const {createUser, getUsers, updateUser, deleteUser, getUser} = require("../controllers/userController.js");


router.post('/', createUser);

router.get('/', getUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.get('/:id', getUser);

module.exports = router;

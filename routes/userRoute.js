const express = require("express");
const User = require("../models/User.js");
const router = express.Router();
const authenticateJWT = require('../middleware/auth');

const {createUser, getUsers, updateUser, deleteUser, getUser} = require("../controllers/userController.js");


router.post('/', authenticateJWT,  createUser);

router.get('/', authenticateJWT, getUsers);

router.put('/:id', authenticateJWT, updateUser);

router.delete('/:id', authenticateJWT, deleteUser);

router.get('/:id', authenticateJWT, getUser);

module.exports = router;

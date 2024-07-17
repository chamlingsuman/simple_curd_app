const User = require('../models/user.model.js');

const createUser = async(req, res) => {
    try{
       const user= await User.create(req.body);
       res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
const userModel = require("../models/user");


exports.createUser = async (req, res) => {
    const user = userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  
    console.log(user);
  
    return res.status(201).json({ message: "User Created" });
}

exports.getAllUsers = async (req, res) => {
    const allUsers = await userModel.find();
    return res.json({ data : allUsers});
}

exports.getUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    return res.json(user);
}

exports.updateUserById = async (req, res) => {
    const user = await userModel.findByIdAndUpdate
    (req.params.id, req.body, {new: true});
    return res.json(user);
}

exports.deleteUserById = async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.json(user);
}
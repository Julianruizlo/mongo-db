const UserService = require("../services/UserServices");
const getUser = async(req,res) => {
const id = req.params.id
res.json(await UsertService.getUser(id)) ;
} 

const getUsers = async (req,res) => {
res.json(await UsertService.getUsers()) ;
} 
const saveUser = async(req,res) => {
    await UserService.saveUser(req.body);
    
    res.status(201).json("Created");
} 
const deleteUser = (req,res) => {

} 
const updateUser = (req,res) => {

} 

module.exports = {getUser,getUsers, saveUser, deleteUser, updateUser};
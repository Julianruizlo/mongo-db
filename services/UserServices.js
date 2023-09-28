const user = require("../models/User");
const {mongoose} = require ("mongoose");

let id = 1;
const getUser = async (id) => {
const userModel = mongoose.model("User",User);
return await userModel.find({id:{id}});
};

const getUsers = async () => {
    const userModel = mongoose.model("User",User);
    return await userModel.find({});
} 
const saveUser = async (user) => {
    const userModel = mongoose.model("User",User);
    user = {
        ...user,
        id: idGenerator
    }
    idGenerator++;
    const userCreated = await User.create(user);
} 
const deleteUser = () => {
    
} 
const updateUser = () => {

} 

module.exports = {getUser,getUsers, saveUser, deleteUser, updateUser};
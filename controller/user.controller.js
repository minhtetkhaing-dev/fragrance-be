const { randomBytes } = require('crypto')
const User = require('../models/users.model')

const getUsers = async () => {
    const users = await User.find()
    return users;
}

const findUser = async (id) => {
    const user = await User.findById(id)
    return user;
}

const addUser = async (data) => {
    const user = await User.create(data)
    return user;
}

module.exports = {
    getUsers,
    addUser,
    findUser
};

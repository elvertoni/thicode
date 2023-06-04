const User = require("../models/User");

const createService = (body) => User.create(body)

//user é o meu Schema que eu exportei e create é o metodo do mongoose que cria nesse padrão

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) =>
    User.findOneAndUpdate(
        { _id: id },
        { name, username, email, password, avatar, background }
    )

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
}
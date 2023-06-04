const User = require("../models/User");

const create = (body) => User.create(body)

//user é o meu Schema que eu exportei e create é o metodo do mongoose que cria nesse padrão

module.exports = {
    create,
}
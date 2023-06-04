const userService = require('../services/user.service');

//com async aviso que é uma função assíncrona
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  //com await ela espera a resposta para continuar
  const user = await userService.create(req.body);

  if (!user){
    return res.status(400).send({mensage: "Error creating User"});
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

module.exports = { create };

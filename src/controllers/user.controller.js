const userService = require('../services/user.service');

//com async aviso que é uma função assíncrona
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  //com await ela espera a resposta para continuar
  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ mensage: "Error creating User" });
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

const findAll = async (rec, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered users" })

  }
  res.send(users);
};

const findById = async (req, res) => {
  const user = req.user;
  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one field for update" });
  };

  const {id, user} = req;

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );
  res.send({message: "User updated successfully"});
};


module.exports = { create, findAll, findById, update };

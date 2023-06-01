const express = require('express');
const userRoute = require("./src/routes/user.route");

const app = express();

app.use("/soma", userRoute);

//ROTA (Composta por 3 itens)

  // 1 - METHOD HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
      //GET - pega uma info
      //POST - cria uma info
      //PUT - altera toda informação
      //PATH - altera parte da info
      //DELET - apaga uma info

  // 2 - NAME (rota em si) um identificador da rota
  // 3 - FUNCTION (callback) responsável por executar algum comando
      //callback uma função executada dentro de outra função (validar dados)


//toda rota vai ser acessada pelo cliente
// a porta de entrada do backend é a rota
// a api roda em torno da rota

app.listen(3000);
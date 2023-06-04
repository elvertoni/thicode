const mongoose = require('mongoose');
//vamos criar um schema para limitar como os documentos serão criados

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },

    password:{
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        require: true,
    },
    background:{
        type: String,
        require: true,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

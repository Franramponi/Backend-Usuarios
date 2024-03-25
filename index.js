const mongoose = require('mongoose');
const modulo = require('./config/config.js');


const User = mongoose.model('User', {
    username: String,
    edad: Number,
})


// crear();
const buscarTodo = async() =>{
    const users = await User.find()
    console.log(users);
}

// buscarTodo();

const buscar = async() =>{
    const user = await User.find({username: 'admin'})
    console.log(user)
}

// buscar()

const buscarUno = async() =>{
    const user = await User.findOne({username: 'usuario promedio'})
    console.log(user)
}

// buscarUno();

const actualizar = async() =>{
    const user = await User.findOne({username: 'usuario promedio'})
    console.log(user)
    user.edad = 30;
    await user.save();
    
}
// actualizar();

const eliminar  = async() =>{
    const user = await User.findOne({username: 'usuario promedio'})
    console.log(user)
    if(user != null){
        await user.deleteOne();
    }
    
}
// eliminar();
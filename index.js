const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ramponifran:Le147123@cluster0.fxykmq2.mongodb.net/miapp?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () =>{
    const user = new User({username: 'usuario promedio', edad: 15})
    const savedUser = await user.save()
    console.log(savedUser)
}

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
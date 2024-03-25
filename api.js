const express = require('express');
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express();
const port = 8080;
const modulo = require('./config/config.js');
const DB_URI = modulo.DB_URI;

const uri = DB_URI;


app.use(express.json());
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });


app.get('/users',user.list);
app.post('/users', user.create)
app.get('/users/:id', user.get);
app.put('/users/:id',user.update);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.destroy)
app.use(express.static('app'))

app.get('*', (req,res)=> {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port,()=>{
    console.log('app inicializada')
})
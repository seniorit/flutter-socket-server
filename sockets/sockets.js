const {io}= require('../index');

//Mensajes de Sockets
io.on('connection',client=>{
  console.log('Cliente Conectado');
  client.on('disconnect',()=>{
    console.log('Cliente Desconectado');
  });

  client.on('msg',(payload)=>{
    console.log('msg',payload);

    io.emit('mensaje',{admin: 'Bifurcación pendiente en 45 min!'});
  })
});
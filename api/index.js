const express= require('express')
const path=require('path')
//Import routes
const operationRoutes=require('./src/routes/OperationRoute');
const typeRoutes=require('./src/routes/TypeRoute')

const app=express();

// configuracion del puertos
app.set('port',process.env.POST || 3001);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
app.use('/api/',operationRoutes);
app.use('/api/',typeRoutes);


// starting the servers
app.listen(app.get('port'),()=>{
  console.log("starting server ")
})
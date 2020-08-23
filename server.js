const express= require('express');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');
const routes=require('./routes/api');


const app=express();

mongoose.connect('mongodb://localhost/myAPI', {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.once('open',() => {
    console.log('Connection made to the MongoDB!');
});



app.use(bodyParser.json());

app.use('/api/v1',routes);





app.listen( process.env.port || 3001,'127.0.0.1', () => {
    console.log('Listening for request at PORT 3001');

})
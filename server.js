const express = require ("express");
const  hots = "127.0.0.1"
const port = 8000;
const app = express() ;

const lista = {
   " id " : "123456", 
    "isCompled " : false, 
    "description" : "walk the dog ", 
}

app.listen(port ,( ) =>{
   console.log("Servidor iniciado " , "en el host " , hots ,"y  el purto  " ,port) ;
} )

app.get('/lista', (req,res)=>{
    res.json( lista)
    


})



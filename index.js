const express = require('express');

const servidor = express();

//Criando nosso endpoit
servidor.get("/hello", (req, res) => {
    res.send("servidor do ledy")
})

servidor.listen(3000, () => {
    console.log("servidor na porta 3000 está funcionando")
})
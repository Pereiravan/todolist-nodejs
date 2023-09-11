const express = require('express');
const path = require("path"); //importei o path , path é a pasta do meu projeto
const routes = require('./router/routers');


const app = express();
const port = 3000;


app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public"))) 
// identifica que os aquivos estatico do projeto esta no public
//__dirname é o nome da pasta principal 

app.use(routes) //fiz o require da rota em cima e to usando ela . o codigo abaixo não é mais necessario , pois ja esta na pasta routes o caminho

// app.get('/home', (req, res) => {
//   res.render('index'); // '/' é a rota . adicionei uma rota '/home'
// });

app.listen(port , () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
}); // ta ouvindo meu projeto na porta 3000
var http = require('http');
var server = http.createServer(function(req,res){
    // req é o parâmetro de requisição e res o de resposta, res.end informa onde a resposta 
    // deve ser exibida, nesse caso estamos mandando a resposta do servidor para tags html
    res.end("<html><body><h1>Olá mundo!</h1></body></html>"); 
});
server.listen(3000);
console.log("servidor ta rodando");
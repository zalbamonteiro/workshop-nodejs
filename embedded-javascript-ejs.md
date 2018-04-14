# Embedded JavaScript - Ejs

## Isolando o html do nosso projeto

Você já deve ter percebido que estamos utilizando como resposta a nossa requisição no servidor tags html para mostrar nossas mensagens. Isso em um aplicação grande não é uma boa forma de usar nem o html e nem o poder de node, mas para isso podemos utilizar o ejs.

O [EJS ](http://ejs.co/)é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end, basicamente conseguimos utilizar códigos em javascript no html de nossas páginas. Mas para isso também precisamos baixa-la pelo npm, então execute no seu terminal o comando

```
$ npm install ejs --save
```

Rodei o nodemon novamente, já que paramos ele para instalar o EJS, e pronto, podemos já utilizar a nossa engine view. Mas antes de montarmos nosso html vamos olhar algumas modificações no nosso arquivo jsband.

```text
var express = require('express');
var app = express();
app.get('/produtos',function(req,res){
    res.render("jsband")
});
app.listen(3000,function(){
    console.log("servidor rodando");
});
```




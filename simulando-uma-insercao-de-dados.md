# Simulando uma inserção de dados

## Inserir dados e o method post

Como nós não vamos utilizar um banco de dados no nosso workshop, não vamos fazer uma inserção no banco de dados completa, mas vamos simular uma inserção de dados no json para que possamos ver um pouco no metodo post.

No arquivo my-api.js, vamos inserir um nova funcionalidade, utilizaremos a mesma rota já criada mas utilizaremos um outros método na mesma rota e aí nossa aplicação fica muito mais legal.

Então no my-api.js adicione.

```
$ restaurante.insert = function(request, response) {		
	dados.restaurantes.push(request.body);
	// aqui estamos utilizando o request para receber os dados enviados.
	response.render('restaurantes', {result: dados});
};
```

{% hint style="info" %}
 request é o que usamos para receber requisições enviadas pelo cliente, nesse caso usamos o request.body, então para isso vamos ter que instalar esse recurso.
{% endhint %}

No seu terminal instale o body-parser com o comando

```text
npm install body-parser --save
```

agora que instalamos nosso body-parser precisamos indicar para nossa aplicação que vamos utiliza-lo. ainda no nosso my-api.js insira o código:

```text
var express = require('express');
var app = express();
const bodyParser   = require('body-parser') // aqui estamos indicando que vamos usar o body-parser
const restaurante = require('./controllers/restaurantes');    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');

app.get('/my-api',function(req,res){
    res.render("index")     
});

app.get('/my-api/restaurantes', restaurante.listAll);
app.get('/my-api/restaurantes/:id', restaurante.getId);
app.post('/my-api/restaurantes', restaurante.insert);


app.listen(3000,function(){
    console.log("servidor rodando");
});
```




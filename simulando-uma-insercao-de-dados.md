# Simulando uma inserção de dados

## Inserir dados e o method post

Como nós não vamos utilizar um banco de dados no nosso workshop, não vamos fazer uma inserção no banco de dados completa, mas vamos simular uma inserção de dados no json para que possamos ver um pouco no metodo post.

No arquivo my-api.js, vamos inserir um nova funcionalidade, utilizaremos a mesma rota já criada mas utilizaremos um outros método na mesma rota e aí nossa aplicação fica muito mais legal.

Vamos precisar de uma nova funcionalidade que vai nos auxiliar a lidar com nosso request, que vão ser as requisições dos dados, esse recurso é o body-parser. No seu terminal instale o body-parser com o comando

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

### Chegou a hora de criar o método

Conforme já fizemos antes com os métodos de listagem e de detalhe, criando funcionalidades no nosso controller, vamos criar um para simular nossa inserção.

No controller restaurantes.js insira o código.

```text
restaurante.insert = function(request, response) {		
	dados.restaurantes.push(request.body); // aquiestamos usanro o request para receber nossas requisições 
	response.render('restaurantes', {result: dados});
};
```


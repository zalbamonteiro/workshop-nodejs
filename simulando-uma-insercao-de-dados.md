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

Você deve estar se perguntando, como vou enviar os dados para simular na minha aplicação?? Tudo bem, nada de pânico vamos aprender a usar uma ferramenta nova, que vai nos ajudar na vidaaaaa!! Essa ferramenta é o postman. Para facilitar vocês pode instalar o postaman com um extenção no google chrome para testar nossas requisições.

### Ok, mas o que é postman?

O **Postman** é uma extensão do Google Chrome muito útil para realizar testes de suas aplicações http.

Agora que já instalamos o postaman vamos fazer uma simulação de inserção de dados. no postaman envie os dados em formato de json no body como o indicado abaixo:

```text
{ "id": "4", "name":"teste"    , "tipo": "normal"}
```

{% hint style="info" %}
não esqueça que você deve informar o url \(sua nova rota\), do seu metodo de inserção.  
http://localhost:3000/my-api/restaurantes
{% endhint %}

Seu resultado deve ser parecido com isso.



![](.gitbook/assets/image%20%289%29.png)


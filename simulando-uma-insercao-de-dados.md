# Simulando uma inserção de dados

## **Inserir dados com o método post**

Como nós não utilizamos um banco de dados no tutorial, não faremos uma inserção no banco de dados completa, mas vamos simular uma inserção de dados no JSON para que possamos ver um pouco no método post.

No arquivo my-api.js vamos inserir uma nova funcionalidade utilizando a mesma rota já criada, porém usando um outro método na mesma rota. Assim nossa aplicação ficará muito mais legal.

Para podermos trabalhar com JSON nas respostas das nossas requisições, vamos precisar de ajuda para lidar com nosso request. Esse recurso é o body-parser, cuja função particionar o body da nossa resposta e transformar em um objeto JavaScript\). No seu terminal instale o body-parser com o comando.

```text
npm install body-parser --save
```

Agora que instalamos o body-parser precisamos indicar para nossa aplicação que vamos utilizá-lo. Ainda no my-api.js, insira o código:

```javascript
var express = require('express');
var app = express();
const bodyParser   = require('body-parser') 
// estamos indicando que vamos usar o body-parser

const restaurante = require('./controllers/restaurantes');   
​
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
​
app.get('/my-api',function(req,res){
   res.render("index")    
});
​
app.get('/my-api/restaurantes', restaurante.listAll);
app.get('/my-api/restaurantes/:id', restaurante.getId);
app.post('/my-api/restaurantes', restaurante.insert);
​
​
app.listen(3000,function(){
   console.log("servidor rodando");
});

```

### **Chegou a hora de criar o método**

Conforme já fizemos antes com os métodos de listagem e detalhe para criar funcionalidades no nosso controller, vamos criar outro para simular nossa inserção. 

No controller restaurantes.js insira o código.

```javascript
restaurante.insert = function(request, response) {		
	dados.restaurantes.push(request.body); // estamos usando o request para receber nossas requisições
	response.render('restaurantes', {result: dados});
};
```

Você deve estar se perguntando: como vou enviar os dados para simular na minha aplicação? Tudo bem, nada de pânico! Vamos aprender a usar uma ferramenta nova que vai nos ajudar na vida: o Postman. Para facilitar, você pode instalar o Postman como uma extensão no Google Chrome para testar as requisições.

### **Ok, mas o que é Postman?**

O **Postman** é uma extensão do Google Chrome muito útil para realizar testes de aplicações HTTP.

Agora que já instalamos o Postman, vamos fazer uma simulação de inserção de dados. No Postman envie os dados em formato de JSON no body como o indicado abaixo:

```javascript
{ "id": "4", "name":"teste"    , "tipo": "normal"}
```

{% hint style="info" %}
Não esqueça que você deve informar a URL \(sua nova rota\) do seu método de inserção.  
http://localhost:3000/my-api/restaurantes
{% endhint %}

Seu resultado final deve ser parecido com isso.  


![](.gitbook/assets/image%20%289%29.png)


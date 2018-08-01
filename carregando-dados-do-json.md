# Carregando dados do JSON

## **O que é JSON?**

JSON é um formato leve de troca de informações/dados entre sistemas.  Vamos utilizar a estrutura do JSON para fazer o carregamento mínimo dos dados, já que se utilizarmos um banco de dados perderíamos tempo de configuração e instalação do banco.

Vamos utilizar um formato bem conhecido por várias aplicações: o JSON Além de ser usado em grande parte das aplicações no mercado, o formato se aproxima muito de um bando de dados não relacional \(banco de dados de tabela não relacional\), como o mongoDB por exemplo. Vamos começar!

Primeiro criaremos um diretório chamado **json**, que será onde nós guardaremos os documentos JSON.

Se vocês não está familiarizado\(a\) com essa estrutura, vamos dar uma olhada nela: um JSON é um objeto em JavaScript ou em linguagens como Java, por exemplo. Ele se parece muito com um dicionário. Copie o modelo e crie um arquivo chamado **restaurantes.json** e insira:  


```javascript
{
   "restaurantes": [
       { "id": "1", "name":"Sabor Latino" , "tipo": "normal"},
       { "id": "2", "name":"Pto Mioia"    , "tipo": "vegetariano"},
       { "id": "3", "name":"Mamma Mia"    , "tipo": "normal"}
   ]
}

```

Depois de salvar os restaurantes,  vamos criar o nosso controller. Talvez você já tenha ouvido falar em MVC alguma vez. MVC é um padrão de organização e arquitetura de projeto que divide sua aplicação em três principais partes:

* views: templates e camada de visualização.
* controllers: onde fica a lógica aplicada em seu projeto.
* model: modelo e entidades que normalmente se relacionam com o banco de dados.

Separar o JSON e controller em diretórios diferentes nos ajuda a otimizar nossa aplicação e deixar a estrutura mais legível e de fácil manutenção.  


### Criando um controller

Crie um diretório chamado **controller** e dentro dele vamos criar nosso controller de restaurantes. No controller vamos isolar a complexidade de regra de negócio do arquivo onde se encontram as rotas, melhorando assim nossa aplicação..

Depois de criar o seu controller e a pasta controller, adicione o seguinte código ao documento:

```javascript
var dados = require('../json/restaurantes.json'); 
// fazemos o include do JSON com os dados

var restaurante = {} 
// criamos uma variável para poder definir nossas funções

restaurante.listAll = function(request, response) {	
   // criamos uma função que recebe os dados do JSON que são passados para 
   // a variável dados
   
   response.render('restaurantes', {result: dados});
   // enviamos a variável para a nossa view
   
};
module.exports  = restaurante; 
// exportamos os dados de Node.js, pois o formato de modularização que a 
//plataforma do Node adota é o CommonJS

```

Depois de criarmos nossos arquivos JSON, controller, fazer a função que vai pegar os dados do JSON, tratar na controller e enviar para a view, temos que informar tudo isso na nossa routes.

```javascript
var express = require('express');
var app = express();
const restaurante = require('./controllers/restaurantes');  
// importamos o controller
// e criamos uma variável para usá-la nas rotas

app.set('view engine','ejs');
app.get('/my-api',function(req,res){
   res.render("index")    
});
​
app.get('/my-api/restaurantes', restaurante.listAll); 
// passamos o método que criamos no controller para facilitar a 
//organização da minha aplicação

app.listen(3000,function(){
   console.log("servidor rodando");
});

```

Ao terminar todos esses passos, seu resultado será mais ou menos assim:



![](.gitbook/assets/image%20%286%29.png)


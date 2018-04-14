# Carregando dados do json

## O que é json?

JSON é basicamente um formato leve de troca de informações/dados entre sistemas.  Vamos utilizar a estrutura do json para fazermos o carregamento minimo dos dados, já que se formos utilizaru m banco de dados, perderíamos tempo de configuração e instalação de banco. 

Cmo o nosso tempo é curto, vamos utilizar um formato bem conhecido por várias aplicações que e o json, além de ser usado em grande parte das plicações no mercado , o formato de json se aproxima muito de um bando de dados não relacional, como o mongoDB por exemplo. Vamos começar!

primeira criaremos um diretório chamado json, que será ondo nos guardaremos os nossos documentos json. 

Se vocês não está familiarizado com essa estrutura, vamos dar uma olhada nela, basicamente um json é um objeto em javascript, ou em linguagens como java por exemplo se parece muito com um dicionário. Copie o nosso modelo para que possamos trabalho juntas nesse whorkshop. Crie um arquivo chamado restaurantes.json e insira:

```text
{
    "restaurantes": [
        { "id": "1", "name":"Sabor Latino" , "tipo": "normal"},
        { "id": "2", "name":"Pto Mioia"    , "tipo": "vegetariano"},
        { "id": "3", "name":"Mamma Mia"    , "tipo": "normal"}
    ]
 }
```

Depois de termos salvos os nossos restaurantes,  vamos criar o nosso controller. Talvez você já tenha ouvido falar em MVC alguma vez, MVC é um padrão de organização e arquitetura de projeto que divide sua aplicação em três principais partes: 

* views : templates e camada de visualização.
* controllers: onde fica a lógica aplicada em seu projeto.
* model: modelo e entidades que normalmente se relacionam com o banco de dados.

Separar o json e controller em diretórios separados nos ajuda a otimizar nossa aplicação, a deixar a estrutura dela mais legível e de fácil manutenção.

### Criando um controller

Crie um diretório chamado "controller" e dentro dele vamos criar nosso controller de restaurantes. No controller vamos isolar a a complexidade de regra de negócio do arquivo onde se encontram as rotas, melhorando assim nossa aplicação.

Depois de criar o seu controller e a pasta controller, adicione o seguinte código ao documento:

```
var dados = require('../json/restaurantes.json'); // Aqui nos fazemos o includo do json com os dados
var restaurante = {} // criamos uma variavel para poder definir nossa funções
restaurante.listAll = function(request, response) {	
    // Criamos uma função que recebe os dados do json que não passados para a variável dados
    // e enviamos ela para a nossa view.
    response.render('restaurantes', {result: dados});
};
module.exports  = restaurante; // aqui nos exportamos os dados de node, pois o formato de 
//modularização que a plataforma do ode adota é o commonjs
```




# Express, e vamos as rotas

## Criando rotas diferentes

Sempre que formos trabalhar em um projeto com vários páginas ou serviços, vamos recorrer ao uso de rotas, rotas são endereços e/ou URLs diferentes que servem para identificarmos várias páginas ou funcionalidades da nossa aplicação.

Podemos criar nossas rotas utilizando a biblioteca http, mas como queremos uma api de sucesso, precisamos usar todos os recursos para que a my-api seja uma estrela. Vamos então conhecer um pouco de express.

 Express, que é uma biblioteca JavaScript construída sobre o módulo HTTP do Node.js, e nos fornece uma maneira mais simples de lidar com as requisições. Então bora instalar o express no nosso jsband.

### Cadê o meu package.json?

Até agora não houve a necessidade de pensarmos sobre o package.json, mas estamos começando a adicionar bibliotecas e módulos a nossa aplicação e esse recurso será muito util para nossa aplicação. 

Package.json é uma arquivo de configuração da nossa aplicação, nele estarão presentes todas os recursos e dependências que nossa aplicação irá precisar para rodar. A maior vantagem em utilizar o package.json é em projeto em que temos vários pessoas trabalhando na mesma aplicação, pois tendo uma vez o arquivo configurado com todas as dependências, para te-las instaladas basta usar uma comando que lerá esse arquivo de configuração para baixar as dependências e recursos necessário.

### Criando um package.json do inicio

Para criar um package.json do inicio, basta que dentro do diretório my-api, no terminal vocês pare o servidor com `Ctrl+c` e digite o comando `npm init`. Isso irá gerar uma série de perguntas de configuração para ao final criar uma arquivo package.json.

Criamos o package.json, agora vamos ao que nos interessa, vamos adicionar o nosso queridinho Express. No seu terminal execute os comandos.

```
$ npm install express --save
```

sendo que o --save indica que essa dependência será adicionada as configurações do package.json, assim a próxima pessoa que copiar sua aplicação, só precisará executar o arquivo de configuração para baixar também o express.

{% hint style="info" %}
Para saber mais sobre você pode ler em: [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
{% endhint %}

Se você quiser um arquivo package.json exatamente igual ao do tutorial, pode copiar os dados do package.json abaixo e salvar no seu projeto.

```text
{
  "name": "my-api",
  "version": "1.0.0",
  "description": "arquivo de configuracao my-api",
  "main": "my-api.js",
  "scripts": {
    "test": "test"
  },
  "author": "Zalba Monteiro",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.3"
  }
}
```

### Minha primeira rota

Agora que já temos o express instalado, e nosso arquivo package.json, podemos começar a usar o express e criar nossas rotas.

```text
var express = require('express'); // vamos trocaro http pelo uso do express
var app = express();
app.get('/my-api', function(req,res){ 
  // estamos usando o metodo get e criando um rota para nossa aplicação
  // depois disso informamos como postramos a resposta da nossa requisicao
  res.send("<html><body><h1>Bem vindo ao my-api!!</h1></body></html>");
});
app.listen(3000,function(){
    console.log("servidor rodando");
});
```

{% hint style="info" %}
Lembre-se que para instalar o express nos paramos o servidor, rode o nodemon novamente para restartar o servidor.
{% endhint %}

Agora acesso o endereço do servidor local, mas lembre-se que adicionamos uma rota agora, então nossa url também mudou. Acesse: 

```text
http://localhost:3000/my-api
```



![](.gitbook/assets/image%20%284%29.png)


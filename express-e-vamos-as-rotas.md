# Rotas e Express

## Criando rotas diferentes

Sempre que formos trabalhar num projeto com vários páginas ou serviços, vamos recorrer ao uso de rotas. As rotas são endereços e/ou URLs diferentes que servem para identificarmos várias páginas ou funcionalidades da nossa aplicação.

Podemos criar nossas rotas utilizando a biblioteca HTTP, mas como queremos uma API de sucesso, precisamos usar todos os recursos para que a my-api seja uma estrela. Vamos então conhecer um pouco de Express.

 Express é uma biblioteca JavaScript construída sobre o módulo HTTP do Node.js que nos fornece uma maneira mais simples de lidar com as requisições. Então bora instalar o Express na nossa API.

### Cadê o meu package.json?

Até agora não houve a necessidade de pensarmos sobre o package.json, mas estamos começando a adicionar bibliotecas e módulos à nossa aplicação e esse recurso será muito útil.

Package.json é uma arquivo de configuração da aplicação. Nele estarão presentes todos os recursos e dependências que nossa aplicação irá precisar para rodar. A maior vantagem em utilizar o package.json é quando temos várias pessoas trabalhando na mesma aplicação, pois uma vez que o arquivo tenha sido configurado com todas as dependências é muito simples ter acesso ao projeto. para te-las instaladas basta usar um comando que lerá o arquivo de configuração para baixar e instalar as dependências e recursos necessários.

### **Criando um package.json do início**

Para criar um package.json do início, vá ao terminal e pare o servidor com `Ctrl+c` e digite o comando `npm init` dentro do diretório **my-api**. Isso irá gerar uma série de perguntas de configuração para ao final criar uma arquivo package.json.

Criamos o package.json, agora vamos ao que nos interessa: adicionar o queridinho Express. No terminal execute os comandos.

```
$ npm install express --save
```

O `--save` indica que essa dependência será adicionada as configurações do package.json, assim a próxima pessoa que copiar sua aplicação só precisará executar o arquivo de configuração para baixar o Express junto com o pacote.

{% hint style="info" %}
Para saber mais acesse o link:[ https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
{% endhint %}

Se quiser um arquivo package.json exatamente igual ao do tutorial, você pode copiar os dados do package.json abaixo e salvar no seu projeto.

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

Agora que já temos o Express instalado e o arquivo package.json, podemos criar nossas rotas.

```javascript
var express = require('express'); // vamos trocar o HTTP pelo uso do Express
var app = express();
app.get('/my-api', function(req,res){ 
    // estamos usando o método get e criando uma rota para nossa aplicação 
    res.send("<html><body><h1>Bem vindo ao my-api!</h1></body></html>"); 
    // informamos como postamos a resposta da nossa requisição
});
app.listen(3000,function(){ 
    console.log("servidor rodando");
});
```

Lembre-se que nós paramos o servidor para instalar o Express, rode o Nodemon novamente para reiniciar o servidor.

 Agora acesse o endereço do servidor local, mas lembre-se que adicionamos uma rota, então nossa URL também mudou. Acesse:

```text
$ my-api
```



![](.gitbook/assets/image%20%284%29.png)


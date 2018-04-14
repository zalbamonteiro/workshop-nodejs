# Express, e vamos as rotas

## Criando rotas diferentes

Sempre que formos trabalhar em um projeto com vários páginas ou serviços, vamos recorrer ao uso de rotas, rotas são endereços e/ou URLs diferentes que servem para identificarmos várias páginas ou funcionalidades da nossa aplicação.

Podemos criar nossas rotas utilizando a biblioteca http, mas como queremos uma banda de sucesso, precisamos usar todos os recursos para que o jsband seja uma estrela. Vamos então conhecer um pouco de express.

 Express, que é uma biblioteca JavaScript construída sobre o módulo HTTP do Node.js, e nos fornece uma maneira mais simples de lidar com as requisições. Então bora instalar o express no nosso jsband.

### Cadê o meu package.json?

Até agora não houve a necessidade de pensarmos sobre o package.json, mas estamos começando a adicionar bibliotecas e módulos a nossa aplicação e esse recurso será muito util para nossa aplicação. 

Package.json é uma arquivo de configuração da nossa aplicação, nele estarão presentes todas os recursos e dependências que nossa aplicação irá precisar para rodar. A maior vantagem em utilizar o package.json é em projeto em que temos vários pessoas trabalhando na mesma aplicação, pois tendo uma vez o arquivo configurado com todas as dependências, para te-las instaladas basta usar uma comando que lerá esse arquivo de configuração para baixar as dependências e recursos necessário.

### Criando um package.json do inicio

Para criar um package.json do inicio, basta que dentro do diretório jsband, no terminal vocês pare o servidor com `Ctrl+c` e digite o comando `npm init`. Isso irá gerar uma série de perguntas de configuração para ao final criar uma arquivo package.json.

Criamos o package.json, agora vamos ao que nos interessa, vamos adicionar o nosso queridinho Express. No seu terminal execute os comandos.

```
$ npm install express --save
```

sendo que o --save indica que essa dependência será adicionada as configurações do package.json, assim a proxima pessoa que copiar sua aplicação, só precisará executar o arquivo de configuração para baixar também o express.

{% hint style="info" %}
Para saber mais sobre você pode ler em: [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
{% endhint %}

Se você quiser um arquivo package.json exatamente igual ao do tutorial, você pode baixa-lo pelo link:




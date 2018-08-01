# Criando um servidor web

## **E por quê não começar com "Olá mundo"?**

Para darmos início ao nosso projeto precisamos criar um diretório onde colocaremos os arquivos da nossa aplicação. Para isso, crie uma pasta na sua área de trabalho com o nome **my-api**. Isso mesmo! Vamos montar uma API neste workshop usando Node.js e JavaScript.

### Crie o diretório do projeto

Na área de trabalho, crie a pasta **my-api**.

```
$ mkdir my-api
```

Depois de criada, entre no diretório **my-api**.

```text
$ cd my-api/
```

### Criando o arquivo my-api

No seu editor de texto favorito crie um arquivo JavaScript chamado "my-api.js". Dentro deste arquivo vamos rodar um comando básico de console para visualizarmos o funcionamento. Insira o seguinte comando:

```javascript
console.log("Olá mundo!");
```

Salve o arquivo dentro do diretório que criamos na área de trabalho, vá até o terminal e execute o seguinte comando:

```text
node my-api.js
```

Feito isso, dentro do terminal onde você executou o comando deverá aparecer o que escrevemos dentro do nosso comando de console: o nosso queridíssimo "Olá mundo!".

Basicamente o que ocorreu nessa primeira etapa foi executar o JavaScript através do Node.js.

### Olha o servidor aí geeeeeeente!

Estamos avançando muito bem, mas para montarmos nossa API precisaremos muito de um servidor. Então vamos criá-lo para podermos trabalhar.

Para agilizar o passo a passo, veja os comentários especificando as linhas de código, assim você poderá entender o que os comandos significam.

No arquivo **my-api**, substitua o "Olá mundo" pelo código abaixo.

```javascript
var http = require('http');           // http é uma biblioteca disponível no Node.js
var server = http.createServer();     // estamos criando um servidor
server.listen(3000);                  // a porta do nosso servidor local onde a aplicação será rodada
console.log("servidor está rodando")  // sinalizamos que o servidor está rodando

```

Abra em seu navegador o servidor local na porta 3000:

### Opa, mas não carregou nada no meu localhost:3000 :\(

Se você tentar abrir o seu servidor local na porta 3000 \(conforme indicamos no nosso código\), não conseguirá visualizar nenhuma página. Mas tudo bem, iremos resolver isso agora!

Não conseguimos visualizar nada acessando o endereço porque quando usamos o método createServer\(\) precisamos passar dentro dos parênteses uma função anônima com dois parâmetros: um de requisição e outro de resposta. Dentro dessa função anônima diremos à aplicação como queremos apresentar a nossa resposta.

```javascript
var http = require('http');
```

```javascript
var server = http.createServer(function(req,res){   
    // req e res são os parâmetros de requisição e resposta, respectivamente   
    res.end("<html><body><h1>Olá mundo!</h1></body></html>"); 
    // res.end informa onde a resposta deve ser exibida, nesse caso 
    // estamos mandando a resposta do servidor para tags html
    });
    server.listen(3000);
    console.log("servidor ta rodando");
```

Uma coisa importante: toda vez que o arquivo for modificado é necessário reiniciar o servidor, então salve as alterações e rode novamente node **my-api.js** no seu terminal.

Agora vamos ao teste. Abra novamente o servidor local na porta 3000.

Tcharaaaaammm... Temos nosso servidor e um "Olá mundo" em grande estilo!


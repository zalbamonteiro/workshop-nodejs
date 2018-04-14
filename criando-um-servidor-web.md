# Criando um servidor web

## E porque não começar com o "Olá mundo"?

Para darmos inicio ao nosso projeto precisamos criar um diretório onde colocaremos os arquivos da nossa aplicação. Para isso crie uma pasta na sua área de trabalho com o nome jsband. Isso mesmo! Vamos montar uma banda nesse workshop, e tudo isso usando nodejs e javascript.

### Crie o diretório do projeto

A sua área de trabalho cria a pasta jsband

```
$ mkdir jsband
```

Depois de criada, entre no diretório jsband.

```text
$ cd jsband/
```

### Criando o arquivo jsband

No seu editor de texto favorito crie um arquivo javascript chamado "jsband.js", dentro dele vamos rodar um comendo básico de console, só para podermos visualizar o seu funcionamento. Insira dentro desse arquivo os seguintes comandos:

```text
console.log("Olá mundo!");
```

Salve esse arquivo dentro do diretório que criamos na área de trabalho, vá até o terminal e execute o seguinte comando:

```text
node jsband.js
```

Feito isso, dentro do terminal onde você executou o comando deverá aparecer o que escrevemos dentro do nosso comando de console. O nosso queridíssimo "Olá mundo!". 

Estamos indo muito bem, em breve nosso projeto começará a tomar forma. \o/

{% hint style="info" %}
Basicamente o que ocorreu nessa primeira etapa é acabamos de fazer a execução do nosso javascript pelo nodejs.
{% endhint %}

### Olha o servidor aí genteeeeee!!

Estamos avançando muito bem, mas para montarmos nossa banda, iremos precisar muitooooo e um servidor. Então vamos cria ele para podermos trabalhar.

{% hint style="info" %}
Para agilizar o nosso passo a passo,  vamos ver comentários especificando algumas linhas de código, assim vocês poderá entender os que os comandos significam.
{% endhint %}

No arquivo jsband, substitua o nosso "Olá mundo" pelo código abaixo. 

```text
var http = require('http');         // http é uma biblioteca disponível no nodejs
var server = http.createServer();   // estamos criando um servidor
server.listen(3000);                // a porta do nosso servidor local rodaremos a aplicação
console.log("servidor ta rodando")  // sinalizamos que o servidor esta rodando
```

Abra em sei navegador o servidor local na porta 3000:

```text
http://localhost:3000/
```

### Opah, mas no carregou nada no meu localhost:3000 :\(

Se vocês tentar abrir em seu navegador o seu servidor local na porta 3000, conforme indicamos no nosso código, não vai conseguir visualizar nenhuma página, mas tudo bem agora nós vamos resolver isso.

Nós não conseguimos visualizar nada acessando o endereço, porque quando usamos o método createServer\(\) uma função anônima que recebe dois parâmetros, um de requisição e um de resposta.

```text
var http = require('http');
var server = http.createServer(function(req,res){
    // req é o parâmetro de requisição e res o de resposta, res.end informa onde a resposta 
    // deve ser exibida, nesse caso estamos mandando a resposta do servidor para tags html
    res.end("<html><body><h1>Listando os produtos</h1></body></html>"); 
});
server.listen(3000);

console.log("servidor ta rodando");
```


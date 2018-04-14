# Embedded JavaScript - Ejs

## Isolando o html do nosso projeto

Você já deve ter percebido que estamos utilizando como resposta a nossa requisição no servidor tags html para mostrar nossas mensagens. Isso em um aplicação grande não é uma boa forma de usar nem o html e nem o poder de node, mas para isso podemos utilizar o ejs.

O [EJS ](http://ejs.co/)é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end, basicamente conseguimos utilizar códigos em javascript no html de nossas páginas. Mas para isso também precisamos baixa-la pelo npm, então execute no seu terminal o comando

```
$ npm install ejs --save
```

Rodei o nodemon novamente, já que paramos ele para instalar o EJS, e pronto, podemos já utilizar a nossa engine view. Mas antes de montarmos nosso html vamos olhar algumas modificações no nosso arquivo jsband.

```text
var express = require('express');
var app = express();
app.set('view engine','ejs'); // setando minha engine de visualizacao

app.get('/jsband',function(req,res){
    res.render("index") 
    // Anteriormente usavamos o send junto com as tags html através do send
    // agora não queremos mais enviar algo "tags" como resposta e sim renderizar
    // uma resposta, é por isso que usamos o render
});
app.listen(3000,function(){
    console.log("servidor rodando");
});
```

{% hint style="info" %}
Importante: por padrão o nodejs sempre irá procurar um diretório chamado views dentro do diretório raiz da aplicação, então para tudo funcionar bem, crie uma pasta chamada views dentro da pasta jsband
{% endhint %}

Dentro da pasta views do nosso projeto, crie um arquivo chamado index.ejs e dentro dele coloque o html abaixo:

```text
<!DOCTYPE html>
<html>
    <head>
        <title>Jsband</title>
    </head>
    <body>
        <h2>Bem vindo ao jsband!</h2>
    </body>
</html>
```

Reinicie o nodemon e veja já sua aplicação com sua engine de visualização. 

Aeeeeee... vocês está indo muito bem!!! &lt;3

### Vamos isolar head e footer

Para podermos reaproveitar ao máximo nosso html, vamos isolar o nosso head e nosso footer, assim vamos criar múltiplas páginas de forma mais rápida e otimizada. Mão na massa.

### Vamos criar o head e o footer

Primeiro crie uma pasta chamada include onde guardaremos todas as partes dos nossos templates que vamos reutilizar no nosso projeto. Depois de criar esse diretório crie um novo arquivo de nome "head.ejs" e insira o seguinte código

```text
<!DOCTYPE html>
	<html>
		<head>
		    <title>Jsband</title>
		</head>
		<body>
```

Agora criaremos o footer, salve um arquivo chamado footer.ejs e insira o código abaixo:

```text
    </body>
</html>
```

O diretório include deverá se parecer com esse aqui.



![](.gitbook/assets/image%20%282%29.png)

Para testar nossos includes vamos criar uma nova página que será o nosso teclado. Você não imaginou que uma banda poderia fazer sucessos sem um teclado não é?! Vamos criar o teclado.ejs

Crie um arquivo no diretório view chamado "teclado.ejs" e insira o seguinte código.

```text
<% include include/head %> <!-- aqui é a marcação onde faz o include do head -->
<div>
    <h2>Teclado</h2>
<div>
<% include include/footer %> <!-- aqui é a marcação onde faz o include do footer -->
```


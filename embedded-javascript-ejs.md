# Embedded JavaScript \(EJS\)

## Isolando o HTML do nosso projeto

Você já deve ter percebido que estamos utilizando tags HTML para mostrar mensagens como resposta a nossa requisição no servidor. Em um aplicação grande não é uma boa forma de usar o HTML ou poder do Node.js. Para isso podemos utilizar o EJS.

O [EJS](http://ejs.co/) é uma engine de visualização, com ele conseguimos transportar dados do back-end para o front-end de uma maneira fácil e simples É possível utilizar códigos em JavaScript no HTML das páginas, mas para isso precisamos baixá-la pelo NPM Execute no seu terminal o comando.

```
$ npm install ejs --save
```

Rodei o Nodemon novamente \(já que paramos para instalar o EJS\) e pronto, podemos já utilizar a nossa engine view. Antes de montarmos o HTML, vamos olhar algumas modificações no nosso arquivo **my-api**.

```javascript
var express = require('express');
var app = express();
app.set('view engine','ejs'); // setando a engine de visualização
​
app.get('/my-api',function(req,res){
   res.render("index")
   // anteriormente usávamos o send junto com as tags HTML através do send
   // agora não queremos enviar "tags" como resposta e sim renderizar uma resposta, é por isso que usamos o render
});
app.listen(3000,function(){
   console.log("servidor rodando");
});

```

{% hint style="info" %}
Importante: por padrão o Node.js sempre irá procurar um diretório chamado views dentro do diretório raiz da aplicação, então para tudo funcionar bem crie uma pasta chamada views dentro da pasta **my-api**.
{% endhint %}

Dentro da pasta views do nosso projeto, crie um arquivo chamado **index.ejs** e dentro dele coloque o HTML abaixo:

```markup
<!DOCTYPE html>
<html>
   <head>
       <title>My API</title>
   </head>
   <body>
       <h2>Bem vindo ao My API!</h2>
   </body>
</html>
```

Reinicie o Nodemon e veja sua aplicação com a engine de visualização.

Aeeeeee... Você está indo muito bem!!! &lt;3

### Vamos isolar head e footer

Para podermos reaproveitar ao máximo nosso HTML, vamos isolar o head e footer, assim vamos criar múltiplas páginas de forma mais rápida e otimizada. Mão na massa.

### Vamos criar o head e o footer

Primeiro crie uma pasta chamada **include** onde guardaremos todas as partes dos templates que vamos reutilizar no nosso projeto. Depois de criar esse diretório crie um novo arquivo de nome **head.ejs** e insira o seguinte código.

```markup
<!DOCTYPE html>
	<html>
		<head>
		    <title>My API</title>
		</head>
		<body>
```

Agora criaremos o footer. Salve um arquivo chamado **footer.ejs** e insira o código abaixo.

```markup
    </body>
</html>
```

O diretório include deverá se parecer com esse aqui.



![](.gitbook/assets/image%20%288%29.png)

Para testar os includes vamos criar uma nova página que será a nossa consulta direta do banco. Nossa API será um catálogo de restaurantes.Crie um arquivo no diretório view chamado **restaurantes.ejs** e insira o seguinte código.

Crie um arquivo no diretório view chamado "restaurantes.ejs" e insira o seguinte código.

```markup
<% include include/head %> <!-- essa é a marcação onde faz o include do head -->
<div>
   <h2>Todos os restaurantes</h2>
<div>
<% include include/footer %> <!-- essa é a marcação onde faz o include do footer -->
```

{% hint style="info" %}
Note que dessa vez para inserir comentários usamos  que é como inserimos comentários em HTML.
{% endhint %}

Para finalizar e ver nosso resultado da página da nossa API, temos que ir no arquivo my-api.js, criar uma nova rota e indicar o template que desejamos renderizar.

```javascript
var express = require('express');
var app = express();
app.set('view engine','ejs');
​
app.get('/my-api',function(req,res){
   res.render("index")    
});
​
app.get('/my-api/restaurantes',function(req,res){
   res.render("restaurantes"); // nova rota e novo template que possui os includes   
});
app.listen(3000,function(){
   console.log("servidor rodando");
});
```

O resultado deve ser algo parecido com esse:



![](.gitbook/assets/image%20%281%29.png)


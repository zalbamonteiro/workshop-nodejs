# Nodemon

## Melhorando o funcionamento do nosso servidor

Você já deve ter percebido que sempre que fizermos uma alteração na nossa aplicação, teremos que reiniciar nosso servidor para subir as atualizações. 

Ok, conseguir subir um servidor no primeiro momento parece muito legal, mas acredite depois de horas de programação, ter que subir o servidor a cada alteração pode ser tudo o que vocês não vai querer fazer enquanto estiver trabalhando. Mas sem desespero, porque para solucionar esse problema podemos utiliza o nodemon.

Ele permite que a gente rode um script em node e que ele fique monitorando os arquivos. Caso você altere, ele restarta automaticamente o servidor. Para instalar o nodemon, vamos utilizar o "gerenciador" de dependências npm 

```
$ npm install -g nodemon
```

Pronto! Agora você pode alterar seus arquivos que o nodemon vai restartar o nosso servidor.

Para usarmos o nodemon para subir o nosso servidor, basta no terminal digitarmos o comando:

```text
nodemon my-api
```

![](.gitbook/assets/image%20%284%29.png)


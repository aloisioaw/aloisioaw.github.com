---
layout: post
title:  "Ferramenta: um echo server flexível"
author: aloisioaw
categories: Ferramenta
comments: true
tags: [Ferramenta, HTTP, HTTPS, Server]
---

[![Code Size](https://img.shields.io/github/languages/code-size/aloisioaw/flex-echo-server?style=flat-square)](https://github.com/aloisioaw/flex-echo-server)
[![Star on GitHub](https://img.shields.io/github/stars/aloisioaw/flex-echo-server?style=flat-square)](https://github.com/aloisioaw/flex-echo-server)
[![Forks on GitHub](https://img.shields.io/github/forks/aloisioaw/flex-echo-server?style=flat-square)](https://github.com/aloisioaw/flex-echo-server)

Às vezes nos deparamos com situações em que nos vemos batendo a cabeça contra a parede por um problema bobo. Às vezes por pura desatenção. Porém, às vezes o que nos falta é a ferramenta adequada.
Como trabalho há bastante tempo com serviços, já me deparei em mais de uma situação em que uma ferramenta como a que vou descrever aqui hoje me foi muito útil: um servidor echo. Mas, dessa vez, ao invés de baixar o projeto de alguém, decidi criar o meu próprio. Bem rápido, básico modificável.
Nesse artigo vou falar mais sobre esse papagaio de requests. Cola aí!

#### Sumário
{:.no_toc}

- TOC 
{:toc}

### Pra quê?

Tem algumas situações em que o serviço no qual você está trabalhando chama um outro serviço. Por vezes, você não tem o ambiente todo montado, ou você precisa isolar esse serviço enquanto testa modificações. Ou você se jogou de cabeça num projeto ou está prestado suporte pra um projeto que não conhece, e só gostaria de checar a chamada para esse serviço. Nesses casos, um "Echo Server" pode ser uma baita ferramenta. Eu me baseei no [http-echo-server](https://github.com/watson/http-echo-server).

### Requisitos

- [Node](https://nodejs.org/en/) - Nota: eu prefiro sempre instalar usando o [NVM](https://github.com/nvm-sh/nvm). É bem mais fácil, e já vem com o NPM;
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/);
- [openssl](https://www.openssl.org/) - caso você queira rodar um servidor HTTPS;


### Instruções

- Faça o `git clone` do [projeto](https://github.com/aloisioaw/flex-echo-server);
- Leia as instruções no arquivo README.md;

### Como funciona?

Utilizando-se dos pacotes nativos do Node.js, é possível instanciar servidores HTTP ou HTTPS. A maior diferença é que para o segundo é necessário criar um certificado que será utilizado para autenticar a segurança do seu servidor. Nesse caso, como somente utilizaremos essa solução para desenvolvermos alguma outra coisa, não nos preocupamos com isso, já que não é uma ferramenta para ser usada em produção.

Configurando variáveis no momento da execução do código é possível selecionar entre o tipo de servidor(HTTP ou HTTPS), a porta e o código HTTP que será retornado.

### Exemplos de teste

Básico:
```
# Inicializar
npm install

# Gerar certificados SSL
scripts/./setup_openssl.sh
```

Usando HTTP:
```
# GET
curl http://localhost:56537/trying/out/the/url

# POST
curl http://localhost:56537/trying/out/the/url -d "{ \"data\": \"tests\" }"
```

Usando HTTPS:
```
# GET usando HTTPS, e usando a opção -k para ignorar o certificado
curl -k https://localhost:56537/trying/out/the/url

# POST usando HTTPS, e usando a opção -k para ignorar o certificado
curl -k https://localhost:56537/trying/out/the/url -d "{ \"data\": \"tests\" }"
```

### Código

Você pode obter o código mencionado [no GitHub](https://github.com/aloisioaw/flex-echo-server).
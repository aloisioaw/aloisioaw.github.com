---
layout: post
title:  "Serverless: Como criar um site usando S3?"
author: aloisioaw
categories: Serverless
comments: true
tags: [Serverless, AWS]
---

Tem algumas coisas que enquanto eu não trabalhava mais recorrentemente com AWS me pareciam não caber, ou nunca chegarem nem perto ds produtos servidos pela gigante de vendas(ou seria gigante da TI? ...de Cloud? ...enfim). As vezes é difícil de acreditar na quantidade de produtos existentes hoje na AWS.
Há algum tempo atrás eu descobri que era possível servir uma aplicação React/Angular usando S3 para servir os arquivos JS. Agora descobri que é possível também servir os arquivos HTML e configurar um index e uma página de erro padrão.
Por isso, montei o exemplo abaixo. Dá uma olhada e me diz o que você acha. Boa leitura!

#### Sumário
{:.no_toc}

- TOC 
{:toc}

### Requisitos

Algumas coisas são necessárias pra rodar esse projeto:

- [Conta na AWS](https://portal.aws.amazon.com/billing/signup#/start)
- [Serverless Framework CLI](https://www.serverless.com/framework/docs/getting-started/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [Yarn](https://yarnpkg.com/)

### Instruções

- Faça o `git clone` do projeto;
- Leia as instruções no arquivo README.md;

### Quais componentes são criados?

Usando Serverless, a estrutura abaixo será criada:
- 2x Buckets no S3:
  - 1x para deploy;
  - 1x para os arquivos que serão enviados;
- 1x Função que retorna uma frase;
- 1x Endpoint no API Gateway que expõe a Lambda para requests GET;
- 1x IAM Role para permitir que a Lambda insira logs no CloudWatch;

Isso tudo você pode ver na Stack que foi criada no CloudFormation.

### Como funciona?

O S3 pode servir seus arquivos como um site através de uma configuração que pode ser feita ara cada Bucket. Com isso, você pode utilizar até mesmo serviços como o Route 53 para mapear o seu domínio para recursos da AWS.
Sendo assim, temos o seguinte fluxo:

<img src="/images/exemplo_site_s3.png"/>

Em ordem:
- Browser requisita o acesso a URL do site(ou somente do bucket criado);
- S3 serve o arquivo index.html;
- index.html apresenta um botão que chama uma função JS que faz uma chamada HTTP GET para o API Gateway;
- o usuário clica no botão;
- API Gateway aciona a Lambda;
- Lambda gera uma resposta;
- A resposta faz todo o caminho até o browser;

### Notas

- Durante o desenvolvimento desse código, precisei trocar de plugin de upload para este que é apresentado. Cheguei a testar o [serverless-s3-sync](https://www.serverless.com/plugins/serverless-s3-sync) e o [serverlesss3-deploy](https://www.serverless.com/plugins/serverless-s3-deploy), mas ambos falhavam. Não consegui encontrar uma solução rápida, então parti pra próxima;

### Código

Você pode obter o código mencionado [no GitHub](https://github.com/aloisioaw/exemplo-sls-deploy-website).
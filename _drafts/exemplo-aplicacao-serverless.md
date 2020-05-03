---
layout: post
title:  "Exemplo de Aplicação Serverless"
categories: serverless
author: aloisioaw
comments: true
tags: [Serverless, AWS, Bitbucket, Node.js, Node, CloudWatch, CloudFormation]
---


Seguindo no ritmo de Serverless, vamos colocar a mão na massa!
Que tal se, ao invés de ter que ler um monte de documentação e bater a cabeça na parede tentando entender as permissões necessárias pra fazer a sua pequena aplicação rodar, você pudesse pegar um exemplo que seja fácil de rodar e modificar pra estudar?

Veremos aqui: Lambda, CloudWatch, CloudFormation

Então, segue aqui que eu vou te entregar esse exemplo agora!

#### Sumário
{:.no_toc}

- TOC 
{:toc}


### Pré-requisitos
Será necessário o seguinte para esse pequeno tutorial:
 - Uma conta na [AWS](https://aws.amazon.com/);
 - Uma conta no [Bitbucket](https://bitbucket.org/);

### Como iniciar

Gostaria que fosse mais simples. Mas nesse momento, o que posso oferecer é são pequenos passos para que esse projeto funcione. Siga os passos abaixo:
- Para começar, acesse o [projeto no Bitbucket](https://bitbucket.org/aloisioaw/sample-aws-serverless) e faça um fork do projeto.
- Em seguida, crie uma chave de acesso para ser utilizada no deploy da aplicação.
- Crie também um Bucket no S3 com o nome "sample.aws.serverless.bucket". Ele será utilizado para o Bitbucket poder armazenar o código para efetuar o deploy;<link>
- De posse da chave de acesso, adicione a chave como variável de repositório no Bitbucket.<link>

### Arquivos

Além de entregar o código funcionando, te explico abaixo os principais arquivos do projeto(que já é ridículo de pequeno):

#### template.yaml: Passaporte da alegria

Aqui fica descrito toda a estrutura que a aplicação irá utilizar. Como e um exemplo muito simples, temos somente a declaração da função e de sua exposição como API.

#### bitbucket-pipelines.yml: xerife do deploy

Esse arquivo é utilizado pelo Bitbucket Pipeline pra efetuar o deploy na AWS.

#### app.js: aqui a mágica acontece

Temos aqui a estrela do projeto: a implementação. Seria a estrela caso o projeto fosse algo mais complexo, mas, como queremos rodar o exemplo, somente retornaremos o que for enviado para a função Lambda, além de logarmos o conteúdo da requisição para o CloudWatch.

### Como verificar se o deploy funcionou?

Você precisará validar duas partes:
 - Se o pipeline do Bitbucket rodou sem problemas;
 - Se o processo do CloudFormation foi executado corretamente;

### Como testar?
<colocar aqui a parada toda pra testar via curl, ou um exemplo do Insomnia>

### CloudWatch é o seu melhor amigo

Muitos problemas serão identificáveis através dos logs do CloudWatch. Portanto, fique atento ao efetuar os seus testes. Geralmente eu acesso os logs do CloudWatch a partir da função Lambda que eu quero inspecionar. Então, a partir da tela inicial da função, é só acessar "Monitoring" e clicar no botão "View logs in CloudWatch".

### Links

- [Como criar a Chave de Acesso da Amazon](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide
- https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-function.html#sam-function-events
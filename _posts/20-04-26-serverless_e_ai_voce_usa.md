---
layout: post
title:  "Serverless: e aí? Você usa?"
categories: serverless
author: aloisioaw
comments: true
tags: [Serverless, AWS]
---

Você até conhece Serverless, mas não sabe as vantagens e desvantagens? Para que serve? Onde vive? Do que se alimenta? E por que não está no Globo Repórter? Se sua resposta foi “não” ou “talvez” já está mais do que na hora de saber. Se sua resposta foi “sim”, bem, continue aqui e veja se concorda com minha opinião.

#### Sumário
{:.no_toc}

- TOC 
{:toc}

### Serverless - o que é?

Quando você cria o código logo após precisa preparar um servidor com conexão para a internet, configurações de firewall, memória ram, espaço em disco e etc. Isso deixa de acontecer com o Serverless pois essas responsabilidades passam automaticamente para ele. Ou seja, basicamente você se preocupa com o código, já o servidor em nuvem que você escolher se responsabilizará pela infraestrutura e pelo que o sistema utilizará em termos de banco de dados, filas e exposição a requisições HTTP. 


__Código + definição de infraestrutura - provisionamento = Serverless__
{: style="text-align: center"}


### Fornecedores

Falando de Serverless, pode-se facilmente encontrar diversos fornecedores de um serviço que ofereça as capacidades desse tipo de implementação:



*   [AWS](https://aws.amazon.com/lambda/): Foi a primeira a oferecer o serviço através do serviço chamado Lambda;
*   [Google](https://cloud.google.com/functions): a Cloud Platform oferece Functions desde 2016;
*   [IBM](https://cloud.ibm.com/functions/): oferece Cloud Functions na IBM Cloud desde 2016. Sua implementação utiliza Apache OpenWhisk;
*   [Microsoft Azure](https://azure.microsoft.com/en-us/services/functions/): oferece Azure Functions;
*   [Adobe](https://www.adobe.io/apis/experienceplatform/runtime.html): disponibiliza o I/O Runtime;
*   [VMWare Tanzu](https://tanzu.vmware.com/serverless);
*   [Oracle Fn Project](https://fnproject.io/).


### Para que usei?

Dentre as opções de fornecedores entendi que a ampla adoção e o conjunto da AWS atendiam os requisitos que eu precisava nos meus projetos. Portanto, utilizei as capacidades da Lambda em alguns projetos profissionais e alguns pessoais nos seguintes casos:


*   Push Notifications: criação de estrutura para processamento que combinava:
    *   DynamoDB: para armazenar os devices de um usuário, bem como suas opções de Opt-In, além das notificações em si;
    *   SQS: as Lambdas tem uma capacidade máxima de memória(3GB) e processamento(1000 execuções concorrentes), portanto, achou-se interessante na época atrelar uma fila aos Streams da tabela de Notificações do DynamoDB para que fossem geradas as requisições para a Lambda encaminhar o envio do Push.
    *   Lambda: Efetuava o carregamento de alguns dados e disparava o Push utilizando um serviço externo;
*   Estrutura barata para um pequeno aplicativo: tenho algumas ideias para colocar em prática. Então, para o menor aplicativo que pude pensar, ao pesquisar sobre maneiras baratas de compor uma aplicação com Banco de Dados, Backend, Client Web e Client Mobile, a melhor solução foi utilizar a estrutura da AWS para Lambda. É possível criar endpoints REST a partir de Lambdas, o que se torna perfeito para pequenas aplicações. Além disso, o custo pela estrutura fica bem baixo quando comparado a uma VM ou um VPS;
*   Acrescer dados a um token do Cognito: num projeto recente, foi necessário adicionar alguns dados após o usuário logar na aplicação. Porém, os dados deveriam ficar no token JWT. Como estávamos usando AWS Cognito, foi possível criar uma Lambda que pode ser atrelada ao processo de autenticação. Com isso, é possível adicionar qualquer dado que seja necessário, e mantê-lo protegido dentro do JWT;


### Vantagens


__Criação de toda a infraestrutura__

Em vários casos, o uso combinado de uma função Lambda aliada a outra tecnologia(API Gateway, SQS, DynamoDB) provou-se ser uma maneira rápida de criar uma nova feature, com suporte completo a CI/CD de ponta a ponta. Além disso, ferramentas como CloudFormation permitem que se possa manter a definição da infraestrutura junto ao código. Além da vantagem dessa documentação, o deploy da aplicação já disponibiliza as modificações e cria os recursos requisitados e assim evita-se adições de scripts shell ou Terraform. 


__Manutenção e correções de infraestrutura facilitadas__

É possível absorver a responsabilidade de manutenção da estrutura criada dentro do time que a desenvolveu. Como as definições ficam em código, efetuar modificações e correções pode ser feito por quem já entende como o código funciona, sem requerer a intervenção de um time de DevOps ou mesmo de Infra.


__Preço Baixo__

Como não há servidores alocados o tempo todo para a aplicação, você paga somente pelo que utiliza.


__Escalabilidade__

A alocação de recursos para atender as requisições da aplicação são automáticas. Algumas configurações podem ser feitas, mas, por definição, toda função Serverless já é escalável.


### Desvantagens


__Controle e configuração__

O controle da instância onde o código roda não fica a disposição. Não há um servidor onde se possa conectar via SSH e efetuar uma verificação.(Dependendo da situação, isso é uma vantagem)


__Cold start - Início frio__

Como a idéia central desse recurso é que você não tenha um servidor disponibilizado para a sua aplicação o tempo todo, como meio de baixar custos, há um tempo de atraso na resposta da primeira solicitação após os recursos terem sido desalocados. O normal é que esse tempo fique abaixo de 1s. 

Nota: Ouvi falar de projetos que implementaram uma maneira de disponibilizar ambientes importantes antes que os clientes começassem a utilizar o sistema através de um request agendado. Estranho, mas funciona.


__Vendor Lock In__

As definições de infraestrutura e algumas características que serão utilizadas em código certamente serão específicas de um fornecedor ou outro. Isso acaba dificultando a migração. Porém, deve-se sempre levar em conta onde prefere-se colocar o custo: na criação ou numa possível futura migração.


### Por que eu continuo usando?


__Baixo custo__

Uma das características que mais atrai a atenção para implementar sistemas usando características Serverless segue o mesmo intuito de migrar projetos para ambientes cloud: *redução de custos*. Como descrevi em **Para que usei?**.

__Integrações para CI/CD__

Poder utilizar-se de deploy automatizado em conjunto com a possibilidade de separar os deploys por ambiente, torna-se muito atrativo quando se quer prototipar, desenvolver e entregar features rapidamente.

Há muitos repositórios de código que possibilitam essa integração direta com a AWS, como por exemplo o BitBucket.

__Separação de Responsabilidade__

A separação de responsabilidades que enxerguei no Serverless foi bem interessante. Visto que uma Lambda tem restrições de tamanho, consumo de memória e tamanho de requests, o desenvolvimento fica orientado a quebrar as Lambdas nas menores partes possíveis, e delegando as responsabilidades de acordo. Vejo isso como uma possibilidade de evitar a criação de monolitos.

__Linguagens suportadas__

Meus maiores conhecimentos hoje estão em Java e Javascript. Portanto, a possibilidade de usar uma dessas duas linguagens para criar Lambdas me é muito favorável. Além disso, hoje uma Lambda pode ser escrita em: Java, Go, PowerShell, Node.js, C#, Python e Ruby. Além disso, a Amazon disponibiliza uma Runtime API que possibilita a utilização de qualquer outra linguagem.

__Ampla adoção__

Há muito material disponível na internet, além de uma boa documentação por parte da própria AWS sobre o tema. Boa parte dos problemas já foram encontrados e soluções foram apresentadas.

__Para que eu não utilizaria?__

Devida a natureza de provisionamento dinâmico do Serverless, há algumas aplicações que devem ser evitadas, como por exemplo:


*   Jobs/Funcionalidades com agendamento: como não há um servidor rodando constantemente a aplicação, não é possível utilizar-se de agendamentos;
*   Logins: com a existência de serviços de autenticação como Cognito e Auth0, que já possibilitam integrações com redes sociais, eu não faria uso de Lambdas para execuções centrais no processo de login(busca de credenciais e validação de senha);
*   Necessidade de alta flexibilidade de fornecedores: hoje em dia até é possível criar funções que possam ser disponibilizadas em múltiplos provedores de cloud, porém, será necessário lidar com as particularidades de deploy para cada um deles. Portanto, se a flexibilidade de fornecedores for um requisito, eu evitaria Serverless. Provavelmente uma aplicação que deva ser instalada on Premise não seja uma boa candidata para Serverless;


### Conclusão

Dessa maneira, vejo o Serverless como um substituto forte a utilização de VPS, instâncias de VM’s em Cloud. Além disso, por ser uma tecnologia feita para Cloud, a arquitetura obrigatoriamente fica orientada a utilizar todo o ambiente provido por essas plataformas, focando no equilibrio entre o que deve ser desenvolvido e com a manutenção dentro do negócio, e o que deve ser um serviço provido pela estrutura escolhida.

Responsabilidades compartilhadas e a alavancagem de recursos são características a serem levados em conta na adoção dessa tecnologia, além dos pontos descritos em [**Por que eu continuo usando?**](#por-que-eu-continuo-usando).

Espero que esse post lhe traga uma nova visão ou informação sobre o tema. 

Você concorda ou discorda de mim? Tem alguma outra ideia? Precisa saber algo específico e está com dificuldade de encontrar? Deixe um comentário ou converse comigo nas redes sociais e vamos criar uma rede para discutir e criar conhecimento sobre diversos temas. 

Abraço e até o próximo texto!

---
layout: post
title:  "React: Que tal deixar o jQuery de lado um pouco?"
author: aloisioaw
categories: React
comments: true
tags: [Javascript, React, React.js]
---

Já imaginou ir até o Supermercado e ter que usar um megafone para pedir onde tem um item? E depois que você tiver o item na mão você tem que torcer para que seja exatamente o que você procura, pois assim que você colocá-lo no carrinho, pode ser que o carrinho volte a ser um punhado de metal?

Pode ser mais fácil, depois que você aprender a forjar uma aplicação usando React.

#### Sumário
{:.no_toc}

- TOC 
{:toc}

## Mas, e como React pode ajudar?

Por ser uma library, e não um framework completo, o React tem uma curva de aprendizado mais suave do que uma solução mais “completa”, como Angular. Isso quer dizer que ele tem um conjunto padrão mais restrito de funcionalidades, porém, para criar aplicações que te permitem facilmente atualizar um componente da tela, é uma excelente escolha.

## Pra que usei?

Pude validar essa comparação entre uma ferramenta e outra em um pequeno projeto no ano passado. A empresa para a qual eu trabalhava precisava de uma ferramenta que possibilitasse a criação de formulários dinâmicos. Ou seja, poder criar um questionário com várias perguntas, seleção de produtos, coletar dados do cliente. E isso deveria ser o mais flexível possível.

No início, tínhamos somente o Thymeleaf e JQuery. O primeiro fazia a geração do HTML no lado do servidor e entregava a página pronta para ser renderizada no browser. O segundo fazia toda e qualquer manipulação visual.

Não preciso dizer o quão difícil seria criar uma tela complexa, com atualizações de acordo com o que o usuário adicionasse ou removesse da tela. Foi então que, após tentar criar uma solução com as ferramentas que eu tinha, resolvi conversar com os líderes e oferecer a ideia de buscarmos um dos Frameworks ou libraries mais modernos, que nos possibilitem escrever menos código e ter mais funcionalidade. Na época, comparei React, Angular e Backbone(e suas variantes).

## O Mar de Frameworks

Ter escolhas é bom. Mas chega uma hora que as escolhas mais atrapalham do que oferecem possibilidades. E assim foi para escolher a dita ferramenta pra substituir o JQuery.

Se você já ouviu falar que houve uma época em que Frameworks para JS surgiam todos os dias, não é mentira nem exagero. Pessoal criava framework até pra fazer somar 1+ 1 se isso não fosse virar piada no Reddit depois.

## Como foi feita a escolha

Procurar, selecionar e comparar é uma tarefa a qual às vezes não é dada o devido valor, quando se escolhe as ferramentas com as quais trabalhar. Com isso em mente, negociei com o time e consegui alguns dias para trabalhar somente nisso.

É difícil escolher um framework. Mas se tratando do que eu tinha em mãos, pude fazer as seguintes perguntas:
*   Serve para o que precisamos?
*   Ainda é atualizado?
*   Tem algum suporte de empresas no desenvolvimento?
*   Tem uma boa documentação?
*   Tem uma grande comunidade?

Todas essas perguntas ajudam a eliminar boa parte dos Frameworks que teriam uma vida curta ou seriam de difícil uso por conta da falta de material e comunidade. O suporte de empresas não é obrigatório, mas certamente prolonga a vida de um projeto.

O React se provou interessante por ter todos os pontos acima, e ainda por cima ser uma Library, e não um framework completo. Isso quer dizer que ele é menor e tem menos recursos, mas não deixa de ser poderoso e nos possibilita obter exatamente as funcionalidades que queríamos.

## Vantagens

__JSON + Componentes = React__
{: style="text-align: center"}

No que o React é melhor do que o JQuery para criar Frontends? Tudo. Pronto. Pode ir pro próximo texto. "Deixa um like, se inscreve no canal e deixa um comentário.". Brincadeira! Até por que um pode complementar o outro, mas se você tentar usar o JQuery para as tarefas não qual o React é melhor, você vai ter dor de cabeça.

Como eu já escrevi no texto [sobre React]({{site.baseurl}}{% post_url 20-07-15-react-pra-que-mesmo %}), a parte de ele espelhar o estado de um JSON possibilita que o seu app React somente se preocupe em carregar a informação, montar o componente corretamente e prover alguma alteração de dados. Só isso. Se você fosse usar JQuery, teria que controlar o nome dos elementos HTML, efetuar trocas, e no final ainda por cima gerar o JSON para enviar para o Backend.

Além disso, pude ver que a quantidade de código boiler plate(aqueles métodos utilitários que você criar pra evitar se repetir ou pra instanciar algo complexo) é muito menor. Menos código, menos manutenção, menos dor de cabeça! Jóinha!

## Desvantagens

Nenhuma. Até a próxima! :D

Mentira. Como em tudo, há pontos positivos e negativos.

React inclui mais uma Library que deve ser carregada no projeto. É mais algo a ser gerenciado e que pode introduzir comportamentos inesperados na sua aplicação. Mas, as vezes é necessário escolher as suas batalhas. Nesse caso: desenvolver algo próprio, ou gerenciar uma dependência? Levando em consideração o quão boa é essa ferramenta, eu fico com gerenciar a dependência.

## Por que usar?

Levando em consideração que para refletir dados em um JSON numa tela usando JQUERY, você teria que fazer o seguinte:

[https://jsfiddle.net/buildbreaker/cdaoL3sp/](https://jsfiddle.net/buildbreaker/cdaoL3sp/15/)

Agora, para fazer a mesma coisa em React:

[https://jsfiddle.net/buildbreaker/greso83b/](https://jsfiddle.net/buildbreaker/greso83b/)

A quantidade de linhas é basicamente a mesma nos exemplos que criei. A grande diferença se encontra na facilidade de criar um componente novo, ou mesmo carregar e atualizar os componentes quando se tem uma informação vinda do servidor.

Se tivéssemos uma aplicação com WebSocket, enviando para e recebendo informações do servidor, teríamos um verdadeiro inferno de instruções buscando campos através de IDs ou classes ou mesmo uma tentativa de manter os componentes num array para ter acesso “rápido”. Enfim, nada que seja rapidamente escrito teria o mesmo poder e capacidade do que é oferecido por uma ferramenta como o React.

## Conclusão

JQuery continua sendo excelente para manipular elementos visuais e adicionar alguns comportamentos e funcionalidades, mas ele está longe de ser uma solução para construir UIs mais complexas e responsivas como o que é possível fazer com React ou mesmo Angular.

No fim das contas, se trata de usar a melhor ferramenta para o problema. E nesse caso, as capacidades das ferramentas são bem distintas e fáceis de separar.

Estude, teste e valide idéias. O React pode ser uma baita ferramenta.
---
layout: post
title:  "Você conhece SPAs?"
categories: serverless
author: aloisioaw
comments: true
tags: [Básico, Iniciante, SPA]
---

Sabe o que o Instagram, Facebook, Twitter e o Google Maps tem em comum? São Single Page Applications.


#### Sumário
{:.no_toc}

- TOC 
{:toc}


## Definição

Single Page Applications são aplicações com... somente uma página. Olha só que surpresa! Isso quer dizer que, a página é carregada uma vez, e todas as atualizações e mudanças que ocorrerem ficarão por conta de algum framework.

Soluções como Angular, React e Vue permitem a criação de aplicações de comportamento dinâmico que tem um ponto de entrada (uma página) que carrega a aplicação e então modifica toda a página carregada para refletir o estado atual da aplicação. Por isso  aplicações como Instagram, Facebook e Google se valem dessa ferramenta para melhorar a experiência do usuário.


## Vantagens

Por conta do carregamento único você terá todos os arquivos CSS e JS requeridos sendo baixados uma única vez. Com isso, após o download, a aplicação trafega volumes baixos de informação e ocasionais downloads de arquivos que ainda não estiverem presentes, como imagens e vídeos. 
Além disso, nos frameworks e libraries citados acima, é possível manter contextos entre telas, facilitando a reutilzação de informações que normalmente teriam de ser obtidas novamentes de um serviço ou banco de dados.


## Desvantagens

Justamente por carregar todos os recursos de uma vez, pode ser que a aplicação fique pesada para o usuário que tiver um computador mais limitado. Além disso, se o programador for um maníaco das dependências pode ser que acabe saindo caro para o usuário acessar sua aplicação, uma vez que baixar vários megabytes de dependências Javascript para acessar um site não é exatamente saudável para os parcos pacotes de dados que são mais acessíveis a todos.

Outro ponto é a segurança. Para esse tipo de aplicação, o ideal é que áreas de administração de contas, pagamentos e partes que carreguem dados sensíveis não estejam todas expostas pela mesma aplicação, visto que é fácil obter o script todo com algumas regras de negócio e maneiras de obter dados.


## Conclusão

SPAs são soluções muito exploradas no mercado pela sua praticidade e experiência do usuário. Vale a pena aprender sobre e como utilizar tanto para empregar em grandes quanto pequenas aplicações.
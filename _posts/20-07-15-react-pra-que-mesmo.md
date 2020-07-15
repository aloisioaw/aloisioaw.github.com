---
layout: post
title:  "React: Pra quê, mesmo?"
author: aloisioaw
categories: React
comments: true
tags: [Javascript, React, React.js]
---

Ah...lembro dos bons dias em que Javascript era somente uma linguagenzinha que te permitia que a página tivesse alguma vida. Quando o CSS não tinha nada de animação e isso ficava por conta do versátil JS. Quando cada browser tinha uma interpretação dos padrões e nada funcionava direito.

Bons tempos. #sqn

Ainda bem que hoje em dia podemos utilizar recursos mais complexos, mais inteligentes e menos manuais para alterarmos estados, apresentação e até mesmo enviar informações. Os frameworks Javascript evoluíram de tal maneira que hoje podemos ter aplicações escritas inteiramente para o browser e que até nem precisar carregar um documento html [toda vez que precisa mudar a tela]({{site.baseurl}}{% post_url 20-06-15-voce-conhece-spas %}).

Uma dessas ferramentas é o React, vamos falar um pouco sobre ele?


#### Sumário
{:.no_toc}

- TOC 
{:toc}


## Tá, mas e aí, o que é o tal do React?

Sumarizando em poucas palavras uma história longa: O React foi criado como uma solução interna para o Facebook. No processo de desenvolvimento e adoção da ferramenta criada, o Instagram demonstrou interesse em usar esses recursos em suas soluções e a partir daí o código foi sendo trabalhado para ser disponibilizado como uma biblioteca de código aberto. Bom pra gente! 😁

Eles disponibilizaram a ferramenta que estava sendo utilizada para o News Feed do Facebook em 2011. Em seguida foi utilizada pelo Instagram. Em 2013 houve a liberação do código na JSConf US.

Por fim, essa ferramenta visa possibilitar que desenvolvedores criem aplicações rápidas, escaláveis e simples. Isso porque uma aplicação React pode ser tão grande quanto um sistema todo, ou um módulo, ou até mesmo o rodapé de um site. Você define o tamanho da aplicação.


## Pra que usei?

Utilizei numa aplicação onde eu precisava carregar uma tela que continha campos e componentes de acordo com o que estivesse salvo no banco de dados. Portanto, era necessário algo que possibilitasse a fácil leitura de uma estrutura de dados em JSON, e que permitisse atualizar a tela a partir das alterações do mesmo.

Foi assim que descobri o React, uma alternativa excelente que me permitiu evitar usar a estratégia de criar componentes HTML padrão e em seguida clonar usar usando JQuery (horrível, eu sei. Mas às vezes é necessário quebrar pedra com um alfinete, não?).

Tenho a intenção de utilizar em um pequeno projeto pessoal que tenho desenvolvido no meu tempo livre.


## Vantagens

Dentre as várias possibilidades do mercado, entre elas Backbone.js e Angular, o React se destacou por ter uma comunidade gigante de entusiastas e usuários, isso quer dizer que há uma documentação vasta e rica sobre o assunto, abrange desde problemas no StackOverflow até livros, vídeos e tutoriais. Isso sem falar nos inúmeros complementos disponíveis, até mesmo o Bootstrap tem uma maneira fácil de ser utilizado com React.

A documentação provida pelo site da library também é bastante compreensiva, fácil de usar, contém exemplos e tem os conceitos escritos de maneira clara.

Além disso, a curva de aprendizado não é tão longa, na minha opinião. Acredito que levei em torno de uma semana para aprender o suficiente para escrever uma aplicação completamente fora dos padrões da comunidade, mas resolveu o meu problema.

Outra grande vantagem é que essa ferramenta também facilita o seu aprendizado para criar aplicações mobile utilizando React Native.


#### BÔNUS

Para quem utiliza os recursos da AWS, existe o Amplify, que facilita a utilização de recursos como Cognito para autenticação de usuários. Ou seja, ele se encarrega de enriquecer os requests com os headers adequados para que a autenticação esteja garantida.


## Desvantagens

É difícil colocar desvantagens, pois eu pessoalmente ainda não as vi, e as outras pessoas colocam algumas coisas como curva de aprendizado, documentação e orientação de criação de telas como coisas ruins. 

O que eu posso apontar como ruim é que o código pode virar um “spaghetti” muito facilmente dependendo de como você montar os componentes. É muito fácil começar a cruzar dependências e parâmetros para todos os lados e terminar com um código que não vai ser fácil de manter depois de 1 semana de trabalho e então ao invés de uma solução você tem um estorvo. 


## Por que usar?

A flexibilidade que o React apresentou durante o uso foi muito interessante. Você pode tanto criar uma Single Page Application, quanto criar 2 apps React na mesma página, o que pode ser interessante para a criação de Widgets.

Além disso, o _Hollywood Principle_ “Don't call us, we'll call you” traz uma maneira bastante diferente de trabalhar e pensar sobre a UI, visto que você não precisará programar as mudanças dos componentes apontando quais propriedades do elemento HTML devem mudar, mas sim, como o componente deve ser montado para refletir o estado do dado ao qual estará representando.

Apesar de ser um pouco obscuro como essas atualizações acontecem se você não quiser estudar isso a fundo, a biblioteca calcula qual o menor número de mudanças para refletir o estado atual dos dados usando uma virtual DOM, ou seja, uma cópia da DOM que também guarda alguns controles do próprio React a fim de que ele possa aplicar das melhor forma as mudanças necessárias.


## Por que eu continuo usando?

O fato de continuar sendo um padrão de mercado é bastante apelativo. Existem vários competidores crescendo e ganhando adoção, mas o suporte que o React tem em termos de empresas e comunidade, é ótimo, e bastante favorável a manutenção contínua e desenvolvimento da ferramenta.

Isso é muito bom pois permite que você aprenda a utilizar uma biblioteca que terá suporte por um bom tempo, e também pode utilizar em uma gama infinita de projetos.

Dentre as ferramentas disponíveis, existe um complemento chamado React Developer Tools, que te possibilitar ver toda a ReactDOM. Isso facilita muito a resolver problemas e entender alguns comportamentos que não estão claros no seu código.


## Conclusão

Aprender uma solução que pode ser utilizada de muitas maneiras e em lugares diferentes é sempre interessante. Num mundo onde você tem diversas linguagens e milhões de frameworks e libraries surgindo o tempo todo, torna-se necessário ter uma ferramenta que sobreviva o teste do tempo por ao menos mais do que um par de anos, para que fique claro que sua concepção e adoção sejam fortes o suficiente para justificar a curva de aprendizado e o tempo que deverá ser investido em aprendê-la.
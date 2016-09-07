---
layout: post
title:  "Pequena comparação: Eclipse x Netbeans"
author: Aloisio Arsego Wohlmeister
categories: ide
comments: true
---

No meu trabalho, acabo lidando com diversas tecnologias. Cada tecnologia tem seu conjunto de ferramentas e facilitadores. Para algumas delas, temos IDEs específicas como o jDeveloper. Há pouco tempo me deparei com alguns projetos que estão atrelados ao processo de build de uma IDE específica, o NetBeans. Sendo assim, passei algum tempo usando somente essa IDE, a fim de me acostumar com os pormenores. Explorei configurações para melhorias de performance(como desligar plugins), mudança de atalhos para ficar igual ao Eclipse e outros. Porém, descobri 2 pontos onde eu não consegui melhorar e entender o funcionamento do NetBeans.

### Controle sobre build ###

O ciclo de build padrão para projetos Java é aquele típico "salvou/compilou", que torna aquele processo de programar 1 linha e salvar(sabe...quando você está pensando na solução ainda?) um bocado demorado, pois toda vez que você altera um arquivo, o processo é iniciado e a IDE fica lenta. Trocar de aba, buscar um arquivo e outras operações perdem prioridade e, logicamente, o tempo de resposta fica aquém do que você precisava para continuar aquele precioso raciocínio.

A solução é alterar as opções da IDE e remover esse comportamento, porém, não consegui encontrar um meio de fazer um build parcial, ou um atalho no teclado que fizesse a operação.

Em algumas situações, me pareceu que a única maneira de ter um build confiável, seria usando a opção "Clean and Build", que diversas vezes é impraticável devido o tamanho dos projetos.

Enquanto isso, o Eclipse me proporciona uma maneira de desligar o build automático, e, usando um atalho para build(Ctrl + B, por padrão), eu consigo fazê-lo de forma que chega a parecer incremental, de tão rápido. Se eu sentir que há alguma sujeira ou simplesmente queira um build limpo, é só usar o "Project > Clean...".

### Controle sobre o deploy ###

Aliado ao problema do build, pelas pesquisas que fiz, a única maneira de fazer deploys parciais seria usando o deploy automatizado, em conjunto com o build automatizado. E já que eu não consigo usar um, o outro também fica fora do alcance.

Tentei diversas vezes entender melhor, mas não consegui. Para um desenvolvedor que trabalhou na maioria dos projetos Java usando o Eclipse, o tempo de Build, que na minha opinião é algo que deve ser levado a sério(pois impacta diretamente na produção), ter que fazer um build completo o tempo todo atrapalha demais o foco no desenvolvimento de uma solução.

No Eclipse, pode-se desabilitar o deploy automático, e fazer pequenos Publish's a cada modificação, que são deploys rápidos/parciais.

Portanto, fiz um esforço para adaptar alguns projetos para utilizar o Eclipse nos projetos do cliente em questão, e obtive um ganho significativo no tempo de desenvolvimento/teste. Esse ganho foi essencial para que eu conseguisse finalizar vários projetos no prazo estipulado. Enquanto anteriormente tive impactos bastante negativos.

Lembre-se: minha opinião, não é uma verdade imposta.
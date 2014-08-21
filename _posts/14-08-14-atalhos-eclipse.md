---
layout: post
title:  "Atalhos do Eclipse"
author: Aloisio Arsego Wohlmeister
categories: eclipse
---

Se há uma coisa que prezo em momentos de foco total no código são os atalhos disponíveis. E o Eclipse é muito bom nisso. Há atalhos disponíveis para que você praticamente não precise utilizar o mouse, o que aumenta consideravelmente a sua velocidade.  
Meus atalhos preferidos são:  

*  CTRL + D: Remove a linha atual inteira. (Como é bom não ter que selecionar a linha toda e apagar);
*  CTRL + Espaço: Sugestão/Auto-Completar de Código; (Amigo de todo desenvolvedor)
*  CTRL + 3: Acesso rápido. Permite criar arquivos, abrir visões, comandos, preferências e mais uma infinidade de coisas; (Vale MUITO a pena conhecer)
*  ALT + SHIFT + Q (solta) C: Abre o console; (Sem mais)
*  CTRL + 1: Quick fix. Agiliza aquela correçãozinha de import que ficou faltando quando você estava escrevendo aquele código inspirado e resolveu escrever tudo duma vez antes de ir importando as dependências;
*  CTRL + F8: Muda de perspectiva. Perspectiva, sabe? Debug, Team Synchronizing, Java EE, Java;
*  CTRL + M: Maximiza a tela selecionada. Ou seja, se você estiver com o editor de código selecionado, ele será maximizado, escondendo as outras telas/abas/visões;
*  (Com o código selecionado) CTRL + SHIFT + C: Comenta o código selecionado. Nem todos os tipos de arquivos. Não funcionou num arquivo ANT que mantinha; (Cara, isso é demais! Facilita muito quando tudo o que você quer é deixar um código extenso comentado para poder trabalhar em outra ideia)
*  CTRL + E: Seletor de abas do Editor. Ou seja, quando chamado, abrirá uma lista para que você possa selecionar o arquivo(já aberto) que você quer visualizar; (Muito útil quando você tem arquivos demais abertos e o Eclipse esconde alguns)
*  CTRL + SHIFT + O: Organizar imports. Faz todos os imports óbvios(que não precisam de desambiguação) e pergunta o que fazer para os não tão óbvios assim;
*  ALT + SHIFT + R: Refatorar nomes de métodos, variáveis,a tributos, nomes de classes. Quando fazendo uma refatoração, seja melhorando nomes ou quebrando aquele método de 1000 linhas em pontos mais fáceis de ler, esse é "Um atalho para todos governar"; (Minha vida mudou depois desse atalho. Sério mesmo!)
*  CTRL + PAGE UP/PAGE DOWN: troca de arquivo aberto;
*  CTRL + SHIFT + R: abre a busca de arquivos;
*  CTRL + SHIFT + T: abre a busca por tipos java. Ou seja, busca classes, interfaces, anotações e etc;
*  F12: redireciona o foco/seleção para o editor do código;
*  CTRL + SHIFT + SETA P/ CIMA/BAIXO: sobe/desce os métodos;
*  ALT + SHIFT + S (solta) + R: Abre a tela de getters/setters; (Gostaria de saber isso na época da cadeira de Java na faculdade :( )
*  CTRL + ALT + P: Republica alterações no servidor. (Oh yeah! Vai até que estora o PermGen Space do Glassfish)
*  (Numa classe Java)CTRL + O: Outline. Possibilita que você pesquise atributos e métodos.

Agora, esse último atalho não é lá muito útil sem uma maneira de abrir/selecionar a visão de servidores com um atalho também. Pois bem, isso é configurável.  

Em Window/Preferences, pesquise por Keys e selecione a opção que aparecer. Então, na tela ao lado, pesquise por Show View (Servers). Não esqueça de configurar a opção "When" como "In windows", para que o atalho fique disponível em todo e qualquer lugar do Eclipse. Costumo configurá-lo assim: ALT + SHIFT + Q (solta) + 1. É uma sequência estranha, mas em pouco tempo se torna prática.
Esqueci de algo?
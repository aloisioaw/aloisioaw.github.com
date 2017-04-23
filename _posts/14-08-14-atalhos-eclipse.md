---
layout: post
title:  "Atalhos do Eclipse"
author: aloisioaw
categories: eclipse
comments: true
---

Se há uma coisa que prezo em momentos de foco total no código são os atalhos disponíveis. E o Eclipse é muito bom nisso. Há atalhos disponíveis para que você praticamente não precise utilizar o mouse, o que aumenta consideravelmente a sua velocidade.  
Meus atalhos preferidos são:  

<table class="tabela-padrao atalhos-eclipse">
    <tr>
        <th>Combinação</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>CTRL + D</td>
        <td>Remove a linha atual inteira. (Como é bom não ter que selecionar a linha toda e apagar);</td>
    </tr>
    <tr>
        <td>CTRL + Espaço</td>
        <td>Sugestão/Auto-Completar de Código; (Amigo de todo desenvolvedor)</td>
    </tr>
    <tr>
        <td>CTRL + 3</td>
        <td>Acesso rápido. Permite criar arquivos, abrir visões, comandos, preferências e mais uma infinidade de coisas; (Vale MUITO a pena conhecer)</td>
    </tr>
    <tr>
        <td>ALT + SHIFT + Q (solta) C</td>
        <td>Abre o console; (Sem mais)</td>
    </tr>
    <tr>
        <td>CTRL + 1</td>
        <td>Quick fix. Agiliza aquela correçãozinha de import que ficou faltando quando você estava escrevendo aquele código inspirado e resolveu escrever tudo duma vez antes de ir importando as dependências;</td>
    </tr>
    <tr>
        <td>CTRL + F8</td>
        <td>Muda de perspectiva. Perspectiva, sabe? Debug, Team Synchronizing, Java EE, Java;</td>
    </tr>
    <tr>
        <td>CTRL + M</td>
        <td>Maximiza a tela selecionada. Ou seja, se você estiver com o editor de código selecionado, ele será maximizado, escondendo as outras telas/abas/visões;</td>
    </tr>
    <tr>
        <td>(Com o código selecionado) CTRL + SHIFT + C</td>
        <td>Comenta o código selecionado. Nem todos os tipos de arquivos. Não funcionou num arquivo ANT que mantinha; (Cara, isso é demais! Facilita muito quando tudo o que você quer é deixar um código extenso comentado para poder trabalhar em outra ideia)</td>
    </tr>
    <tr>
        <td>CTRL + E</td>
        <td>Seletor de abas do Editor. Ou seja, quando chamado, abrirá uma lista para que você possa selecionar o arquivo(já aberto) que você quer visualizar; (Muito útil quando você tem arquivos demais abertos e o Eclipse esconde alguns)</td>
    </tr>
    <tr>
        <td>CTRL + SHIFT + O</td>
        <td>Organizar imports. Faz todos os imports óbvios(que não precisam de desambiguação) e pergunta o que fazer para os não tão óbvios assim;</td>
    </tr>
    <tr>
        <td>ALT + SHIFT + R</td>
        <td>Refatorar nomes de métodos, variáveis,a tributos, nomes de classes. Quando fazendo uma refatoração, seja melhorando nomes ou quebrando aquele método de 1000 linhas em pontos mais fáceis de ler, esse é "Um atalho para todos governar"; (Minha vida mudou depois desse atalho. Sério mesmo!)</td>
    </tr>
    <tr>
        <td>CTRL + PAGE UP/PAGE DOWN</td>
        <td>troca de arquivo aberto;</td>
    </tr>
    <tr>
        <td>CTRL + SHIFT + R</td>
        <td>abre a busca de arquivos;</td>
    </tr>
    <tr>
        <td>CTRL + SHIFT + T</td>
        <td>abre a busca por tipos java. Ou seja, busca classes, interfaces, anotações e etc;</td>
    </tr>
    <tr>
        <td>F12</td>
        <td>redireciona o foco/seleção para o editor do código;</td>
    </tr>
    <tr>
        <td>CTRL + SHIFT + SETA P/ CIMA/BAIXO</td>
        <td>sobe/desce os métodos;</td>
    </tr>
    <tr>
        <td>ALT + SHIFT + S (solta) + R</td>
        <td>Abre a tela de getters/setters; (Gostaria de saber isso na época da cadeira de Java na faculdade)</td>
    </tr>
    <tr>
        <td>(Numa classe Java)CTRL + O</td>
        <td>Outline. Possibilita que você pesquise atributos e métodos.</td>
    </tr>
    <tr>
        <td>CTRL + ALT + P</td>
        <td>Republica alterações no servidor. (Oh yeah! Vai até que estora o PermGen Space do Glassfish)</td>
    </tr>
</table>

Agora, esse último atalho não é lá muito útil sem uma maneira de abrir/selecionar a visão de servidores com um atalho também. Pois bem, isso é configurável.  

Em Window/Preferences, pesquise por Keys e selecione a opção que aparecer. Então, na tela ao lado, pesquise por Show View (Servers). Não esqueça de configurar a opção "When" como "In windows", para que o atalho fique disponível em todo e qualquer lugar do Eclipse. Costumo configurá-lo assim: ALT + SHIFT + Q (solta) + 1. É uma sequência estranha, mas em pouco tempo se torna prática.
Esqueci de algo?
---
layout: post
title:  "Uso indiscriminado de herança e complexidade de código"
author: Aloisio Arsego Wohlmeister
categories: padroes
comments: true
---

Já teve a sensação de que aquele código que devia ser simples está complexo demais? Será que é por conta daquele método misterioso que não se encontra na classe que você está olhando, mas é invocado com um this na frente? Ou será que é aquela variável que simplesmente não está instanciada em lugar algum? De repente você encontra a origem! Entra em cena a herança! A classe pai contém as respostas! Espera...Ou será a classe avô? Ou o bisa? Ou...

### O que houve? ###

Se você conhece essa situação, talvez você tenha encontrado uma das situação bizarra da POO: o abuso de herança.
Grande parte dos blogs/sites/livros que abordam boas práticas de desenvolvimento, design, arquitetura de software tem algum texto sobre Composição versus Herança(Extensão), Composição sobre Herança e mais uma boa variedade de nomenclaturas.
O problema é mais recorrente e próximo do que imaginamos. Por exemplo:

{% highlight java %}
public class Produto{}
public class Carro extends Produto{}
public class CarroEsporte extends Carro{}
public class CarroTal extends CarroEsporte{}
public class CarroTalPlus extends CarroTal{}
public class CarroTalExtraPlus extends CarroTalPlus{}
{% endhighlight %}

Entende onde quero chegar?
Muitas vezes queremos fazer o máximo reaproveitamento de código. Então vemos CarroTalExtraPlus como um Produto, porém, se temos alguém no time que não esteja ciente de tal herança, ele poderá achar que essa cadeia termine alguns passos antes(talvez em CarroTal ou em CarroEsporte), e não entenda algum comportamento que o esteja atrapalhando no desenvolvimento da tarefa.

Claro, o exemplo acima é bobo e mal arranha a superfície do problema, porém ele me permite expor o que eu quero: herança demasiada faz mal para o entendimento de código.
O mundo real nos oferece diversas outras situações onde esse recurso irá mais atrapalhar do que facilitar.

Favoreça a composição!

Até mais!
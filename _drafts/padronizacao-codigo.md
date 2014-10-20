---
layout: post
title:  "Padronização de Código - Parte 1"
author: Aloisio Arsego Wohlmeister
categories: padroes
comments: true
---

Ao ler livros como "Código Limpo" do Robert Martin(aka [Uncle Bob](https://twitter.com/unclebobmartin)), é possível ver como algumas técnicas extremamente úteis e benéficas não são exercitadas, como refatoração e padronização de código.
Tenho notado no meu cotidiano como essas técnicas, combinadas com outras coisas simples como a [notação húngara](http://en.wikipedia.org/wiki/Hungarian_notation) e
[claridade sobre brevidade](https://signalvnoise.com/posts/3250-clarity-over-brevity-in-variable-and-method-names) fariam um bem sem limites a muito código colocado em produção.
Além disso, algumas linguagens tem padrões definidos pelas comunidades de utilizadores e os mantenedores da linguagem. Isso permite que diversos desenvolvedores espalhados pelo mundo "falem uma mesma língua". Por exemplo, Java usa Camel Case para métodos, nomes de variáveis e classes e etc. O Ruby usa palavras separadas por underline.

Nesse primeiro post, me aterei a nomenclatura de atributos e métodos.

Exemplos em Java, sem anotações nem getters e setters:
{% highlight java %}
public class Nota {
	private Integer id;
	private List<Produto> produtos;
	private Double valorTotalBruto;   //note a repetição de valorTotal, para evitar
	private Double valorTotalLiquido; //dúvidas sobre qual valor será apresentado
	private Double valorICMS;
	private Double valorST;
	private Boolean emitida;

	//Outros valores de notas

	//Inicializar alguns atributos que usem as classes wrappers
	//ajuda a evitar alguns problemas corriqueiros com NullPointerException
	//A não ser que você precise usar o null para identificar algo
	//Como no caso do id, que pode identificar um objeto não persistido
	public Nota() {
		this.valorTotalBruto = 0.0;
		this.valorTotalLiquido = 0.0;
		this.valorTotalProdutos = 0.0;
		this.icms = 0.0;
		this.st = 0.0;
		this.emitida = false;
	}
}

public class NotaServiceImpl implements NotaService {
	@Override
	public calcularValoresNota(Nota nota) {
		Double valorTotalBruto = 0.0,
			   valorTotalLiquido = 0.0,
			   valorTotalProdutos = 0.0,
			   valorICMS = 0.0,
			   valorST = 0.0;

		for(NotaProduto produto : nota.getProdutos()) {
			valorTotalBruto += produto.getValorTotal();
		 	valorICMS += produto.getValorICMS();
		 	valorST += produto.getValorST();
		}

		//Esse cálculo não está correto nem completo, mas
		//fica aqui para demonstrar o conceito do texto
		valorTotalLiquido = (valorTotalBruto + valorICMS + valorST);

		nota.setValorTotalBruto(valorTotalBruto)
		nota.setValorTotalProdutos(valorTotalProdutos)
		nota.setValorICMS(valorICMS)
		nota.setValorST(valorST)
		nota.setValorLiquido(valorTotalLiquido);
	}
}
{% endhighlight %}

Há um padrão nesse código que pode parecer chato de ficar repetindo: o fato da palavra valor constar em todos os atributos referentes a valores financeiros. Porém, usando o poderoso autocompletar que uma IDE oferece, essa repetição desaparece e fica-se com um código mais claro. Por que repetir? Simples, muitas vezes encontramos códigos citando somente "totalProdutos", e depois descobrimos que esse "totaĺ" na verdade refere-se a quantidade de produtos. Já passou por isso?

Outro ponto a ser notado é que eu optei por não abreviar palavras. Por que? Para facilitar a leitura de uma pessoa de fora do time, ou recém chegada. Às vezes só o fato de existir um termo abreviado que oculte uma palavra um pouco diferente já atrasa o entendimento do código. Com ressalvas, claro, para quando a abreviação é uma sigla, e esta sigla é mais conhecida do que sua escrita por extenso(no caso, ICMS e ST).
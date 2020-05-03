---
layout: post
title:  "Padronização de Código - Parte 1"
author: aloisioaw
categories: padroes
comments: true
tags: [Padrões]
---

Ao ler livros como "Código Limpo" do Robert Martin(aka [Uncle Bob](https://twitter.com/unclebobmartin)), é possível ver como algumas técnicas extremamente úteis e benéficas não são exercitadas, como refatoração e padronização de código.
Tenho notado no meu cotidiano como essas técnicas, combinadas com outras coisas simples como a [notação húngara](http://en.wikipedia.org/wiki/Hungarian_notation) e
[claridade sobre brevidade](https://signalvnoise.com/posts/3250-clarity-over-brevity-in-variable-and-method-names) fariam um bem sem limites a muito código colocado em produção.
Além disso, algumas linguagens tem padrões definidos pelas comunidades de utilizadores e os mantenedores da linguagem. Isso permite que diversos desenvolvedores espalhados pelo mundo "falem uma mesma língua". Por exemplo, Java usa Camel Case para métodos, nomes de variáveis e classes e etc. O Ruby usa palavras separadas por underline.

Nesse primeiro post, me aterei a nomenclatura de atributos e métodos.

Exemplos em Java, sem annotations nem getters e setters:
{% highlight java %}
public class Nota {
	private Integer id;
	private List<Produto> produtos;
	private List<Vendedor> vendedores;
	private Double valorTotalBruto;   //note a repetição de valorTotal, para evitar
	private Double valorTotalLiquido; //dúvidas sobre qual valor será apresentado
	private Double valorICMS;
	private Double valorST;
	private Boolean emitida;
	private Boolean expedicao;

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
		this.expedicao = false;
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

Na classe *Nota* pode-se aferir que os dados do tipo Double foram mantidos juntos. Nesse caso esse tipo de organização promove uma fácil localização do dado sem a utilização de buscas ou outlines(no caso do Eclipse), além do impacto na visualização rápida do código ser muito menor.

Ainda na classe Nota, foram inicializados quase todos os atributos que utilizam wrappers. O atributo *id* não foi inicializado pois é a partir dele que detectamos se é uma inserção no sistema ou uma alteração. Ou seja, quando *id* for *null* então temos uma inserção, do contrário, temos uma alteração.

Há um padrão nesse código que pode parecer chato de ficar repetindo: o uso da palavra *valor* em todos os atributos referentes a valores financeiros. Porém, usando o poderoso autocompletar que uma IDE oferece, essa repetição deixa de ser tão aparente e conseguimos manter um código mais claro. Isso ocorre para evitarmos aquela situação onde muitas vezes encontramos códigos citando somente "totalProdutos", e depois descobrimos que esse "totaĺ" na verdade refere-se a quantidade de produtos. Já passou por isso?

Também deve ser notado que optou-se por não abreviar palavras. Isso para facilitar a leitura de uma pessoa de fora do time, ou recém chegada. Às vezes só o fato de existir um termo abreviado que oculte uma palavra um pouco diferente já atrasa o entendimento do código. Com ressalvas, claro, para quando a abreviação é uma sigla, e esta sigla é mais conhecida do que sua escrita por extenso(no caso, ICMS e ST).
Há casos em que uma política de treinamento já ajuda muito, mas de qualquer forma, muitos termos abreviados levam a uma curva de adaptação maior.

No início, diversos dos pontos citados acima parece preciosismo desmedido, porém cada um desses pontos facilita e diminui consideravelmente o tempo de compreensão do código, o que deixa a vida do programador mais fácil, possibilita um aumento na produção e torna o código manutenível a longo prazo(claro, quando aliado a boas práticas de arquitetura e design de software).
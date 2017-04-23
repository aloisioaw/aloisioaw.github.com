---
layout: post
title:  "Dependência Circular de EJB's - O que fazer?"
categories: ejb dependência circular
---

Há algumas situações onde pode acontecer de você ter um EJB dependendo de outro, e esse outro EJB dependendo do primeiro novamente.  
Com isso, temos uma dependência circular, que não apontara erro em compilação, porém no momento em que dos dois EJB's for necessário, serão mostradas algumas mensagens relativas a esse tipo de problema.  
*TODO: pegar mensagens de referência circular*  

O correto, conforme apontado [aqui][] e [aqui][], seria revisar a arquitetura, pois esse tipo de situação indica que dois tipos de dados/recursos são dependentes entre si e você est

Eu preferi montar um EJB que centralize os dois Repository, me livrando de utilizar uma referência circular.
No meu caso, pq a referência circular aconteceu?
Pelo simples fato de eu ter algumas automatizações que cascateiam a criação de informação.

Exemplo esdrúxulo e incorreto: ao criar um usuário, um set de permissões básicas são criadas ao mesmo tempo.
Imagine que você tem uma classe Usuario e uma Permissao. No modelo onde utilizamos Repositórios genéricos, você fica restrito, obviamente, a um tipo de Entidade por repositório. Então, ao criar o usuário, você irá inserir as Permissões chamando algum método com o nome semelhante a "CriarPermissoesPadrao", o que estará no Service de que mantém as Permissões.
Até aqui, tudo bem.
Agora imagine que temos um método "buscarPermissoesDoUsuario" usando um "getById" do Service do Usuário. Pronto. Temos uma dependência circular.

Então, ao invés de utilizar a estrutura "reta", você cria um Service que faça essa criação e injete somente os Repositories.
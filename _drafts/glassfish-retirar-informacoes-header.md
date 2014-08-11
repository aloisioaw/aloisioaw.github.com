---
layout: post
title:  "Glassfish: Como retirar informações desnecessárias do header da requisição"
categories: glassfish header requisição segurança
---

Durante o desenvolvimento de um projeto que utiliza a combinação de Glassfish e JSF 2.0, estava buscando por possíveis falhas de segurança, ou envio de informações desnecessárias nas respostas das requisições, e notei, ao verificar as respostas no console do Chrome, que haviam algumas informações que, sinceramente, não tem necessidade *nenhuma* de serem enviadas ao browser do usuário.  
Por que não? Pelo simples fato de que essas informações podem fornecer um dados importante para possíveis ataques: versão do servidor e de algum outro software utilizado. Então, por quê enviá-los?

![Cabeçalhos de resposta do Glassfish][glassfish-cabeçalho-resposta]

Então, fui a pesquisa para descobrir como removê-las.  

Achei o 

[glassfish-cabeçalho-resposta]: /images/glassfish-resposta-cabecalho.png
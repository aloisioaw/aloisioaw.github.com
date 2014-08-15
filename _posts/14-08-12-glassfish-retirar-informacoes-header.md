---
layout: post
title:  "Glassfish: Como retirar informações desnecessárias do header da requisição"
author: Aloisio Arsego Wohlmeister
categories: segurança
---

Durante o desenvolvimento de um projeto que utiliza a combinação de Glassfish e JSF 2.0, estava buscando por possíveis falhas de segurança, ou envio de informações desnecessárias nas respostas das requisições, e notei, ao verificar as respostas no console do Chrome, que haviam algumas informações que, sinceramente, não tem necessidade *nenhuma* de serem enviadas ao browser do usuário.  
Por que não? Pelo simples fato de que essas informações podem fornecer um dados importante para possíveis ataques: versão do servidor e de algum outro software utilizado. Então, por quê enviá-los?

![Cabeçalhos de resposta do Glassfish][glassfish-cabeçalho-resposta]

Então, fui a pesquisa para descobrir como removê-las.  

Achei o [seguinte texto](http://alexismp.wordpress.com/2010/09/07/chameleon-glassfish-x-powered-by-and-server/), que aborda como fazer as ditas configurações pela linha de comando.  

Mas, como bom preguiçoso, e como só ia deixar isso configurado em produção, mesmo, e não nos diversos domains que mantenho para cada versão do sistema que tenho, montei um passo a passo de como fazer a mesma coisa utilizando a administração do Glassfish.

*   Menu lateral > Configurations > server-config > Network Config > HTTP Listeners > http-listener-1 > Aba HTTP > Desmarcar a opção "XPowered By";
*   Menu lateral > Configurations > server-config > JVM Settings > Adicionar a opção -Dproduct.name="";   
*   Reiniciar o servidor é *obrigatório*;  

Simples, não?

[glassfish-cabeçalho-resposta]: /images/glassfish-resposta-cabecalho.png
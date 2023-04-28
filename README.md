<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Semana 6 - Introdução à API: HTTP e NodeJS

</br>

Turma Online 22 - B3 | Back-end | Semana 6 | 2023 | Professora Milena Gomes

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras instrucoes caso necessario]

### Resumo
O que veremos na aula de hoje?
* API
* HTTP
* REST
* Testando APIs com Postman
* Criando APIs usando Express e NodeJs

</br>

---

</br>

## **Conteúdo**
### API 
1. [Nossas aplicações precisam se comunicar com o mundo...](#1-nossas-aplicações-precisam-se-comunicar-com-o-mundo)
2. [O que são APIs?](#2-o-que-são-apis)

### HTTP 
1. [Protocolo HTTP](#1-protocolo-http)
2. [Request/Response](#2-requestresponse)
    * [URL](#url)
    * [Methods](#methods)
    * [Headers](#headers)
    * [Status Code](#status-code)
    * [Body](#body)

### NODE.js
1. O que é o NODE.js
2. 

</br>

---

</br>

## **API**

### **1. Nossas aplicações precisam se comunicar com o mundo...**
Quando criamos um código, um algoritmo, ou alguma aplicação mais complexas, nós dependemos de alguma comunicação com o mundo externo, seja para receber ou consultar algum dado, receber alguma interação vinda do usuário ou de outra aplicação, ou seja para interagir com outra aplicação também. São pouco os casos em que há applicações reais que não possuam nenhuma interação para realizar determinada ação ao qual foi programada.

Dito isso, umas da interações mais comuns, principalmente com o advento da internet, é a interação por meio de APIs 

### **2. O que são APIs?**

API é um acronimo para Application Programming Interface, que em tradução livre significa: Interface de Programação de Applicação, mas isso não nos diz muita coisa...

Como eu falei acima, a esmagadora maioria das aplicações precisam interações externas para que elas cumpram o seu propósito, a sua função. Muitas vezes essa interação se dá por meio de um usuário que inputa um dado no sistema, que clica num botão, mas como fazemos quando essa interação tem que partir de uma outra aplicação? Pensando num exemplo: 
- Nós temos uma loja virtual, com um frontend bonitão e um backend servindo esse front. Quando recebemos um pedido nós temos que processar o pagamento desse pedido. Imaginando que seja um pedido feito com cartão de crédito MaterCard, precisamos entrar em contato com essa operadora para creditar esse valor do cartão. 

Como fariámos essa comunicação com a Mastercard? Será que teremos pessoas por trás entrando no sistema da Mastercard e registrando essa compra? Pensando numa Blackfriday, ou no tempo que leva pra compra aparecer no app do banco, faz sentido uma interação humana nesse processo? Com certeza, não.

Muito provavel que esse processo se dê por meio de comunicação do backend da minha loja, diretamente com o sistema da Mastercard e a forma como essa comunicação acontece, é por meio de APIs.

Então dando uma explicação bem simples, APIs são funcionalidades implementadas em uma aplicação que são disponibilizadas para que sejam utilizadas por outras aplicações, de forma simplificada e sem que seja necessário conhecer detalhes da implementação da funcionalidade.

No nosso exemplo, a Mastercard possui uma API com a funcionalidade de registrar compras que pode ser consumida pelo backend da minha loja, sem que o meu desenvolvedor precise saber de detalhes da implementação dessa API, como, que linguagem foi utilizada, onde está hospedado, quais bibliotecas usa. Enfim, não precisamos saber nada disso. 

Mas o que é preciso saber e conhecer para se comunicar via API? É o que saberemos no fim da explicação de outro conceito chave: o HTTP

</br></br></br>

## **HTTP**

</br>

### **1. Protocolo HTTP**

Para nos comunicarmos com outros serviços via API usamos requisições HTTP.

O HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação usado para obtenção de recursos e conteúdo entre cliente e servidor na internet. Esses recursos que podem ser obtidos podem ser uma imagem, uma paǵina da web, um audio, um texto, o qualquer outro tipo de conteúdo que você possa imaginar. 

O HTTP é a base de toda a internet, praticamente toda a nossa navegação é baseada em comunicações por meio desse protocolo. 

Em uma conexão HTTP nós temos alguns componentes:

- Cliente (client): é o serviço/applicação/agente que dispara a requisição
- Servidor (server): é o serviço destino dessa requisição, é quem a recebe e tem a função de processá-la  
- Requisição (request): solicitação de recurso/conteúdo
- Resposta (response):  resposta da solicitação de recurso/conteúdo


Por ser um protocolo, O HTTP estabelece algumas regras e padrões que falaremos a seguir:

</br></br>

### **2. Request/Response**

Analisando as duas primeiras letras da sigla, o H T de Hypertext, nós temos uma ideia como as coisas acontecem na pratica, "por debaixo do panos" como costumamos dizer. A comunicação HTTP se dá por meio de requisições e respostas que são trasmitidas via texto estruturado em um formato padronizado:
![HTTP_RequestMessageExample](https://user-images.githubusercontent.com/27566113/235250577-4b90abeb-942f-4205-a16f-52745049a3b5.png)



Nesse texto temos um exemplo de requisição. Na primeira linha temos método HTTP, path/rota do recurso que estamos solicitando e a versão do protocolo que estamos usando, nas linhas seguintes temos os headers, um por linha, e após a sequência de headers, pulando uma linha, temos o body da requisição.

![HTTP_ResponseMessageExample](https://user-images.githubusercontent.com/27566113/235250612-c3f9a1cb-d8d7-4830-b18d-4fb859de18cd.png)


Agora temos uma resposta. Na primeira linha da resposta nós temos a versão do protocolo e o status code da requisição, novamente nas linhas seguintes temos os headers, um por linha, e após a sequência de headers, pulando uma linha, temos o body da resposta, que é o conteúdo que foi solicitado.


Tudo isso parece bem complexo e até mesmo arcaíco, mas é como as coisas funcionam mais a baixo nível, porém, a boa notícia é que nós programadoras não precisamos fazer esse trabalho de forma manual. Todas as linguagens de programação fornecem bibliotecas que "montam" a requisição e as respostas no padrão correto, sem que nos preocupemos com isso. Nossa preocupação será em somente entender quais informações a requisição precisa e trabalhar com a biblioteca para cria-la e lidar com a resposta. 

</br>

#### **URL**

A URL é o endereço de um recurso na internet, usamos ela o tempo todo enquanto navegamos na internet, e ela é composta das seguintes partes:

![mdn-url-all](https://user-images.githubusercontent.com/27566113/235250525-6465abd8-6403-4836-a317-e7c40525c700.png)

Então lá atrás quando falamos do path/rota, estamos falando desse trecho da url, é importante o entendimento do conceito, pois ele é muito mais relevante, enquanto estamos construindo APIs, do que a URL inteira.

</br>

#### **METHODS**

Uma requisição pode estar solicitando, criando, atualizando ou deletando um recurso em um servidor, e usamos os http methods para indicar isso.
Os methods existentes na definição do protocolo são:

* CONNECT
* DELETE
* GET
* HEAD
* OPTIONS
* PATCH
* POST
* PUT
* TRACE

Porém os mais utilizados e os que focaremos nessa aula são o GET, POST, PATCH, PUT, DELETE

**GET:** usado quando queremos APENAS OBTER algum recuso, é o método usado acessamos uma pagina na web

**POST:** usado quando queremos CRIAR um novo recurso, por exemplo, quando nos cadastramos em alguma loja, ao apertamos no botão que envia o fomulário de cadastro, por de baixo do panos o navegador faz um POST para um servidor criando o nosso cadastro. 

**PATCH:** usado quando queremos atualizar de forma parcial um recurso existente. Quando entramos num formulário especifico para atualizar somente o um dado do nosso cadastro na loja, o navegado usa o método patch para isso, enviando somente o que foi alterado.

**PUT:** usado quando queremos atualizar todos os dados de um recurso existente. Quando entramos no formulário completo com todos os dados do nosso cadastro aberto pra edição e atualizamos alguns dados, o navegado usa o método PUT enviando todos os dados novamente.

**DELETE:** usamos quando queremos deletar um recurso, por exemplo quando deletamos um foto do feed do Instagram.

Fazendo um paralelo com a sigla CRUD temos o sequinte esquema

**C** (create) - POST

**R** (read) - GET

**U** (update) - PATCH/PUT

**D** (delete) - DELETE

</br>

#### **HEADERS**
Os headers são metadados da nossa requisição, eles permitem que cliente e servidor troquem informações complementares que não dizem respeito ao nosso recurso em si e sim à requisição/resposta. 
Um header é composto por seu nome case-insensitive (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha). 


Aqui temos alguns exemplos dos que mais usamos:

```Content-type: application/pdf``` : informa o formato do conteudo presente na requisição, no caso, um arquivo PDF

```Authorization: bearer ewurhuweirhiueh```: informa o token pata autenticação do client

</br>

#### **STATUS CODE**

O status code é uma informação que compõe o response da request e indica, de forma padronizada, o resultado da solicitação.

Essa informação é composta por uma centena acompanhado de um texto, normalmente escrito em caixa alta:

```
200 OK
```

A lista de status codes é dividida em 5 classes

```1xx - Informational responses```

```2xx - Successful responses```

```3xx - Redirection messages```

```4xx - Client error responses```

```5xx - Server error responses```

O mais comuns são:

**200 OK**: indica que a requisição foi processada com sucesso

**400 BAD REQUEST**: indica que há alguma erro na requisição enviada pelo cliente que impediu o processamento da mesma

**404 NOT FOUND**: indica que o recurso ou a rota solicitada não existe

**500 INTERNAL SERVER ERROR**: indica que houve uma falha no servidor ao processar a requisição

</br>

#### **BODY**
Bom, o Body é a parte mais importante da requisição, é nela que vai conter o nosso tão falado recurso, conteudo e etc.
O body suporta qualquer formato de conteúdo: pode ser um texto simples, texto estruturado, imagem, pdf, audio, html, código javascript. Uma infinidade de coisas.

Porém, um dos formatos mais comuns em API, principalmente em integrações entre serviços, é o JSON.

**O JSON (JavaScript Object Notation - Notação de Objetos JavaScript)** é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. 

Um objeto JSON é conjunto de propriedades que são definidas cada um par ```"chave": "valor",```, sendo cada par separados um do outro por virgula, todos dentro de um bloco delimitado por ```{ }```


```
{
  "nome": "Espresso",
  "ingredientes": "cafe",
  "preco": "12"
}
```

O JSON tambem pode ser uma lista de objetos, onde cada objeto é separados um do outro por virgula, todos dentro de um bloco delimitado por ```[ ]```


```
[
  {
    "nome": "Espresso",
    "ingredientes": "cafe",
    "preco": 10.0
  },
  {
    "nome": "Capuccino",
    "ingredientes": "espresso e leite vaporizado",
    "preco": 18.0
  }
]
```








***
### Exercícios 
* [Exercicio para sala](https://github.com/mflilian/repo-example/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/mflilian/repo-example/tree/main/exercicios/para-casa)

### Material da aula 

### Links Úteis
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)


<p align="center">
Desenvolvido com :purple_heart:  
</p>


<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Semana 7 - NodeJS: Event Loop, Callbacks, Promises e Async/Await

</br>

Turma Online 22 - B3 | Back-end | Semana 6 | 2023 | [Professora Milena Gomes](https://www.linkedin.com/in/milena-gr/) 


### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)


## **Conteúdo**

### Callbacks
1. [O que é programação assíncrona?](#1-o-que-é-programação-assíncrona)
2. [Explicando os callbacks](#2-explicando-os-callbacks)

### Event Loop 
1. [O que é o Event Loop?](#1-o-que-é-o-event-loop)

### Promises
1. [Apresentando o NodeJS](#1-apresentando-o-nodejs)


### Async/Await
1. [Apresentando o NodeJS](#1-apresentando-o-nodejs)


## **Callbacks**

### **1. O que é programação assíncrona?**

Nós entendemos o algoritmo como uma sequência de operações, que podem ser chamada de funções, execução de operações aritméticas, e execução de operações lógicas. 

Estamos acostumadas com o entendimento de forma síncrona dos algoritmos que produzimos, ou seja, um operação deve ser concluída para que a próxima operação seja iniciada e assim por diante. Isso é programação de fluxo síncrona.

Porém, é comum que tenhamos algumas operações mais demoradas, como por exemplo, uma operação que dependenda de interação com o usuário e espere algum input de dados, e pensando que o Javascript é um linguagem criada para navegadores, isso é uma questão séria. Pensa em uma opração que o JS execute que seja muito demorada e que enquanto isso trave a tela do usuário pois não é possível seguir no algoritmo, isso parece bem ruim, certo? Então, nós resolvemos essa questão fazendo o uso da programação assíncrona.

Programação assíncrona nada mais é do que a construção de um algoritmo, cujo fluxo de execução, não depende que a execução de um operação seja executada para que a próxima seja realizada.


### **2. Explicando os callbacks**

Claramente, em qualquer tipo de fluxo de execução, precisamos muitas vezes do resultado da operação para realizarmos outras operações, então como funciona a programação assícrona nesse caso?

Para conseguirmos resolver a questão de dependencia entre operações e ainda utilizarmos do fluxo assícrono de execução, nós usamos os Callbacks.

Callbacks são funcões que são passadas por parametros para outras funções, para serem executadas posteriormente. São muito utilizadas em fluxo síncronos, mas são mais importantes ainda em fluxo assícronos. 

Um exemplo síncrono que nós temos é o forEach() que já usamos aqui no curso.

```
livros.forEach() // o forEach é uma função

// Quando passamos (something) => { do(something) } por parametro para o forEach, estamos passando uma função, que por debaixo dos panos o javascript vai executar para cada elemento da lista
```

Então, como o callback resolve fluxos assíncronos? Simples, sempre que temos um conjunto de operações, B e C, que dependem do resultado ou da execução da operação A, nós agrupamos B e C numa função e passamos para a operação A, para que ela o execute quando terminar.

Um clássico exemplo é o setTimeout
```

```

</br></br>

### **2. Request/Response**

## **NodeJS**

### **1. Apresentando o NodeJS**
Como sabemos o Javascript é uma linguagem que foi criada para a internet, para facilitar a criação de sites dinâmicos e interativo, rodando apenas navegador.  

Isso mudou com o desenvolvimento do [Node.js](https://nodejs.org/pt-br/docs), que é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicações web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços.


### **2. Entendendo o que é o NPM**
Em todo desenvolvimento de software nós usamos bibliotecas, que são conjunto de funções, que nos auxiliam na execução de tarefas do código, como por exemplo, converter uma imagem em PDF ou até mesmo fazer uma requisição HTTP. Essa bibliotecas são um conjunto de arquivo disponibilizados na internet que devem estar dentro do diretório do projeto para serem usadas. E para que não tenhamos que baixar e mover pro projeto de forma manual, e nem se preocupar em refazer esse processo quando surge uma nova versão da biblioteca, o NodeJS vem com o NPM, Node Package Manager, que, como o próprio nome diz, é um gerenciado de pacotes do Node, que permite que vc configure as suas dependências de forma simplificada.

> No desenvolvimento com NodeJS essas bibliotecas são chamadas de modules


### **3. Instalando o Node na máquina**
Para desenvolver e rodar aplicações em NodeJS precisamos baixar o serviço na nossa máquina. É o que faremos agora.

Para instalar o NodeJS acesse [esse link](https://nodejs.org/pt-br/download)

</br>

> Você pode encontrar a documentação completa do NodeJS [aqui](https://nodejs.org/pt-br/docs)


***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala)
* [Exercicio para casa](/exercicios/para-casa)


### Links Úteis
- [Saiba o que é JSON e como utilizar](https://www.alura.com.br/artigos/o-que-e-json)
- [O que é HTTP?](https://tecnoblog.net/responde/o-que-e-http/)
- [O que é o NPM?](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
- [Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
- [O que é NodeJS](https://tecnoblog.net/responde/o-que-e-node-js-guia-para-iniciantes/)
- [Documentação HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
- [Documentação NodeJS](https://nodejs.org/pt-br/docs)


<p align="center">
Desenvolvido com :purple_heart:  
</p>


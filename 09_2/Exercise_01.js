/* 1 Como o primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos fazer juntos!

Primeiro, veja o manual da API do site icanhazdadjoke.com . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:

  * Para começar, vamos fazer uma requisição via browser. Visite o site https://icanhazdadjoke.com/, e perceba que ele devolve uma página HTML com uma piada aleatória.

  * Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.

  * Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.

  * Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON.

Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.

  * Utilize o HTML e o JS a seguir como base:

<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>


const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
        
Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros.

  * O endereço para o qual a requisição será feita, ou seja, a url do serviço.

  * Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method: e headers:

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);
        
O segundo parâmetro( myObject ) define o tipo de request( method: 'GET' ) e o formato da resposta( headers: { 'Accept': 'application/json' } ), como visto nas requisições via curl.

A função fetch é uma Promise e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then(em caso de sucesso) e .catch(em caso de falha). A requisição fetch retorna um objeto Response. Utilizando .then, verifique a estrutura da resposta usando um console.log na response retornada pelo fetch.

fetch(API_URL, myObject)
  .then(response => console.log(response));
        
Viu a reponse? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?

Para isso, usamos o método .json() na resposta da API. Esse método converte o conteúdo do body da Response e retorna uma outra Promise, que, quando bem-sucedida, retorna um JSON contendo as informações da piada.

A partir do fetch, troque o console.log() anterior pelo método .json() e imprima os dados da requisição.

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
        
Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página! */

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appendJoke = (joke) => {
  let jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const joke = data.joke;
    appendJoke(joke)
  });
};

window.onload = () => fetchJoke();

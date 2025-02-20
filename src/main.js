// Nullish Coalescing Operator (??)
// const idade = null;
// document.body.innerText = "Sua idade é: " + (idade ?? "não foi informado")

//Objects
  // const users ={
  //   name: 'Breno',
  //   idade: '26',
  //   address:{
  //     city: 'João Pessoa',
  //     state: 'Paraíba',
  //     country: 'Brazil'
  //   }
  // };

///////////////////////////////////////////////////////////////////

//Keys, Observa apenas as chaves não os valores
//Exemplo: 
// document.body.innerText = Object.keys(users)

///////////////////////////////////////////////////////////////////

//Values com JSON.stringfy(), Observa os valores dos objetos no formato de Json
//Exemplo: 
// document.body.innerText = JSON.stringify(Object.values(users))

///////////////////////////////////////////////////////////////////

// Entries, retorna um vetor com varios vetores dentro do mesmo  objeto, cada chave e valor fica em um vetor separado
//Exemplo: document.body.innerText = JSON.stringify(Object.entries(users))

///////////////////////////////////////////////////////////////////

//Destructuring Objects , para pegar valores de um objeto e jogar em variaveis separadas

//Exemplo em uma função:
// function mostrarIdadeNickName({idade, nickname = 'Brebisen', name }){
//   return `${nickname} tem ${idade} anos, mas seu nome é ${name}`;
// }
// document.body.innerText = mostrarIdadeNickName(users)

//Exemplo em uma constante:
//  const  {address, idade: age, nickname = " Brebi"} = users;
//  document.body.innerText = JSON.stringify({address, age, nickname})

///////////////////////////////////////////////////////////////////

//Rest Operator , para pegar valores que não forem explicitamente declarados em uma função ou constante. Utilizando "...rest", podemos pegar todos os valores que não forem usados diretamente.

//Exemplo de uma constante com o Rest Operator:
// const {name, idade, ...rest} = users
// document.body.innerText = JSON.stringify(rest)

//Exemplo de um array com o Rest Operator:
//Obs: para pular um elemento presente no array você pode simplesmente pular com uma vírgula entre os elementos que você quer saltar.
// const array = [1,2,3,4,5]	
// const [first, ,third, ...rest] = array;

// document.body.innerText = JSON.stringify({first, third, rest})
 
///////////////////////////////////////////////////////////////////

//Short hand Syntax, para criar uma constante com o mesmo nome do atributo que você está declarando.
// const name = 'Breno';
// const age = '26';
// const user = {
//   name,
//   age,
// };

//  document.body.innerText = JSON.stringify(user)

///////////////////////////////////////////////////////////////////

//Optional Channing , para verificar se um valor é undefined ou null antes de tentar acessá-lo. Você insere um ponto de interrogação (?) nas propriedades cujos valores podem ser undefined ou nulos.

//  const users ={
//    name: 'Breno',
//    age: '26',
//    address:{
//     street:  'Rua dos Bobos',
//     city: 'João Pessoa',
//     state: 'Paraíba',
//     country: 'Brazil',
//     zip:{
//       code:  '12345678',
//     },
//     showFullAddress(){
//       return 'Funcinou'
//     }
//    }
//  };

//Exemplo de como pegar a propriedade state, do objeto users,  sem ter que verificar se o objeto ou a propriedade existem:
  // const key = 'state';
  // document.body.innerText = users.address?[key] :  "Não informado";

 //Exemplo de  utilização de optional channing para verificar se um endereço e o zip existem, caso existam, mostrar o código postal:
// document.body.innerText = users.address?.zip?.code ?? " Endereço não informado";

//Exemplo utilizando uma função cujo valor pode não existir dentro do objeto:
// document.body.innerText = users.address?.showFullAddress?.() ?? "Não funcionou";

///////////////////////////////////////////////////////////////////

// Metodos de arrays ou de mapeamento de arrays:

//  const array = [ 1,2,3,4,5];

// O forEach não deixa você retornar algo do array em sua função, ele só executa a função e não retorna nada:
// array.forEach(item =>{
//   document.body.innerText += item
// })
// No exemplo abaixo, ele não retorna um novo array, ele altera o array original:
// const novoArray = [];
// array.forEach(item => {
//   novoArray.push(item * 2);
// });
// document.body.innerText = novoArray;

// O for of é utilizado para iterar sobre arrays, objetos e strings:
// for (const i of array){
//   document.body.innerText += i
// }

///////////////////////////////////////////////////////////////////

// map, filter, every, some, find, findIndex, reduce

// O map retorna um novo array com os resultados da função passada para ele, e não altera o array original, ou seja, ele sempre retorna um novo array com o mesmo tamanho do array inicial:
// const novoArray = array.map(item =>{
//   if(item %  2 === 0) { 
//     return item * 10;
//   } else {
//     return item;
//   }
// })
// document.body.innerText = novoArray;

 // O filter retorna um novo array com os elementos que passam no teste da função passada para ele, e não altera o array original(é possivel concatenar os métodos  para retornar um único valor):
// const novoArray = array
// .filter(item => item % 2  === 0)
// .map( item => item * 10);

// document.body.innerText = novoArray;

 // O every retorna true se todos os elementos do array passam no teste da função passada para ele, e false caso contrário:
//  const todosItensSaoNumeros = array.every(item => {
//     return typeof item === 'number';
//  })
//  document.body.innerText = JSON.stringify(todosItensSaoNumeros);

 // O some retorna true se pelo menos um elemento do array passar no teste da função passada para ele, e false caso contrário:

//  const peloMenosUmItemNaoEUmNumero = array.some(item => {
//   return typeof item !== 'number'
// })
//  document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero);

 // O find retorna o primeiro elemento do array que passar no teste da função passada para ele, e undefined caso contrário:
  // const primeiroItemPar = array.find(item => {
  //    return item % 2 === 0;
  // })
  // document.body.innerText = JSON.stringify(primeiroItemPar);

// findIndex retorna o índice do primeiro elemento do array que passar no teste da função passada para ele, e -1 caso contrário:
//  const primeiroItemPar = array.findIndex(item => {
//     return item % 2 === 0;
//  })
//  document.body.innerText = JSON.stringify(primeiroItemPar);

//Reduce retorna um único valor que é o resultado da função passada para ele, executando a função em todos os elementos do array:

// const soma = array.reduce(( acc, item) =>{
//   document.body.innerText += acc + ',' + item + '---'
//    return acc + item;
// },0)
// document.body.innerText = JSON.stringify(soma);

///////////////////////////////////////////////////////////////////

//Template Literals, é uma feature do ES6 que permite a interpolação de strings com expressões JavaScript:
// const name = 'Breno'
// const message = `Bem-vindo , ${name? name : 'visitante'}!`;
//  document.body.innerText = JSON.stringify(message);

///////////////////////////////////////////////////////////////////

//Promises são uma forma de lidar com operações assíncronas em JavaScript, que permite executar código que depende do resultado de outra operação:
// fetch(' https://api.github.com/users/BrenoJLeal02')
//   .then(response =>{
//     return response.json();
//   })
//   .then(data =>{
//     console.log(data);
//   })
//  .catch(error => {
//  console.log(error);
// })
// .finally(()=>{
//   console.log('requisição concluída');
// });


// Promise com async/await:
// async function buscarGitHub() {
//   try {
//     const response = await fetch(' https:api.github.com/users/BrenoJLeal02')
//     const  data = await response.json();
//     return data
//   } catch (error) {
//     console.log (error);
//   } finally{
//     console.log('requisição concluída');
//   }
// }

//  buscarGitHub().then(data =>{
//    console.log(data)
//  })

///////////////////////////////////////////////////////////////////

//Importação e exportação  de funções:
// import * as math from "../lib/math";
// console.log(math.soma(2,3));
// console.log(math.sub( 7,3))
// console.log(math.PI);
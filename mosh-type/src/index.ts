//Arrays
let numbers : number[] = [1, 2, 3, 4, 5];

//Tuplas
let user: [number, string] = [30, "Breno"];

//Enum é um lista de constantes com valores relacionados
//Quando você setar o valor de um enum para um número, o valor dos próximos itens serão incrementados automaticamente

//Utilize const para quando compilar e o arquivo .js estará mais legível
const enum Size{
    Small = 12, 
    Medium,
    Large
}

let mySize: Size = Size.Medium; 
console.log( mySize);

//Funções, descomente as seguintes opções do seu tsconfig.json - "noUnusedParameters": true | "noImplicitReturns": true | "noUnusedLocals": true 
function calculateTax(income: number, taxYear = 2022): number{
    if(taxYear < 2022){
        return  income * 1.2;
    }
    return income * 0.25;
}
calculateTax(10000, 2025)

//Objetos, utilizando readonly voc e não poderá alterar o valor da propriedade, no exemplo abaixo o valor do id pode ser lido, mas não poderá ser sujeito a alteração.

let employee: {
   readonly id: number,
    name:string,
    retire: (date: Date) => void
} = {
    id: 1, 
    name: "Breno",
    retire : (date: Date) => {console.log(date)}
}

//Type Aliases, criando um novo tipo de dado para não ter que repetir o mesmo código.
type Employee = {
    readonly id: number,
    name:string,
    retire: (date: Date) => void
}

let employeeTwo: Employee = {
    id: 1, 
    name: "Breno",
    retire : (date: Date) => {console.log(date)}
 }
 
//Union Types, utilizando o pipe | para indicar que a variável pode ser do tipo number ou string.

function kgToLbs(weight: number | string): number{
    //Narrowing, dessa forma eu estou dizendo que se o tipo for number ele não precisa fazer a conversão, mas se for string ele deve converter para number.
    //Também ajuda o próprio VS code a identificar os métodos disponíveis para aquele tipo de dado.(weight.toFixed(), por exemplo)
    if(typeof weight  === "number"){
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.2;
    }

}
kgToLbs(10);
kgToLbs ("10kg");

//Intersection Types, utilizando o & para indicar que a variável deve ter propriedades de dois ou mais tipos.

type Draggable = {
    drag: () => void;
}
type Resizable = {
    resize: () => void;
}
type UIWidget = Draggable & Resizable; //Essa variável só poderá ser criada com propriedades drag e resize.

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

//Literal Types, utilizando o tipo literal para indicar que a variável deve ter um valor exato.
type Quantity = 50 | 100; 
let quantity: Quantity = 50; //Essa variável só poderá ser criada com o valor 50 ou 100. 

type Metric = 'cm' | 'inch'; // Essa variável só poderá ser criada com os valores 'cm' ou 'inch'. 
let height: Metric = 'cm';


//Nullable Types, utilizando o ? para indicar que a variável pode ser nula.
//Para aceitar valores nulos é possivel descomentar a opção: "strictNullChecks" e setar a mesma para false no arquivo tsconfig.json (não recomendado).
//A melhor forma é passar a opção nulo como um Union Type que irá indicar que o valor de name pode ser string ou null (serve para undefined  também).

function greet(name:string | null | undefined){
    if(name){
        console.log(name.toUpperCase())
    }else{
        console.log('eae')
    }
}
greet(null)


//Optional Chaining, utilizando o ? para indicar que a variável pode ser nula.
type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null{
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0)
//Isso vai dar erro, pois o customer pode ser nulo e não ter a propriedade birthday. Apenas adicione um ? antes da propriedade para indicar que ela pode ser nula.
console.log(customer?.birthday?.getFullYear())

//Optional element access operator, serve para acessar uma propriedade de um objeto que pode ser nulo ou indefinido. Utilize apenas para arrays.

let number: number[] | undefined = [10, 20, 30];

console.log(number?.[1]); 

number = undefined;
console.log(number?.[1]); 

//Optional call operator, serve para chamar uma função que pode ser nula ou indefinida. Utilize apenas para funções.

let log: any = null;
log?.('a')








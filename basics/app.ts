// class User{
//     name: string;
//     constructor(_name:string){
//         this.name = _name;
//     }
// }
//
// const tom : User = new User("Tom");
// const header = this.document.getElementById("header"); //header or type HTMLElement or null
// if (header != null) {
//     header.innerHTML = "Hello, " + tom.name;
// }
//^=== == header!.innerHTML = "Hello, " + tom.name;
//OR with "type assertions" (or "Casting" in other words):
//const header = <HTMLElement>document.getElementById("header");
//const header = document.getElementById("header") as HTMLElement;

// const header = this.document.getElementById("header");
//
// let x : number = 6;
// header.innerHTML = x.toString();
// x = 8;
// header.innerHTML += "<br>" + x.toString();
//
// const PI : number = 3.14;
// header.innerHTML += "<br>" + PI;
// console.log(PI);
//
// let hello : string = "Hello world!";
// header.innerHTML += "<br>" + hello;
//
// let isValid : boolean = true;
// header.innerHTML += "<br>" + isValid;

// const header = this.document.getElementById("header");
//
// let decimal : number = 6;
// let binary : number = 0b1010;
// let octal : number = 0o744;
// let hex : number = 0xf00d;
//
// console.log(decimal);
// console.log(binary);
// console.log(octal);
// console.log(hex);
//
// header.innerHTML = `2 + 2 = ${2+2}`;

// let x; //type any
// x = 1;
// console.log(x, " ", typeof x);
// x = "hello world";
// console.log(x, " ", typeof x);
// /*
// * typeof may return:
// *
// *   "string"
// *   "number"
// *   "bigint"
// *   "boolean"
// *   "symbol"
// *   "undefined"
// *   "object"
// *   "function"
// */
//
// addToHeader(2);
// addToHeader("a");
// addToHeader(true)

// class User {
//
// }
//
// let id : number | string;
// id = 123;
// addToHeader(id);
// id = "Hello";
// addToHeader(id);
// id = null;
// console.log(id);
// id = undefined;
// console.log(id);
//
// let arr : string[] = ["a", "b", "c", "d", "e", "f"];
// let user : User = new User();
// addToHeader(typeof arr); //object
// addToHeader(typeof addToHeader); //function
// addToHeader(typeof user); //object


// let x: any;
// x = 5;
// let n: number = x;
// addToHeader(n);
// x = "hello";
// n = x;
// addToHeader(n);



// let list: number[] = [10, 20, 30];
// let colors: string[] = ["red", "green", "blue"];
// OR
// let names: Array<string> = ["Tom", "Bob", "Alice"];
// фактически такие формы массивов, как number[] или string[] являются сокращением соответственно типов Array<number> или Array<string>


// ReadonlyArray
//
// Массивы позволяют изменять значения своих элементов:
//
// const people = ["Tom", "Bob", "Sam"];
// people[1] = "Kate";
// console.log(people[1]); // Kate
//
// Но TypeScript также позволяет определять массивы, элементы которых нельзя изменять. Для этого применяется тип ReadonlyArray<>, для которого в угловых скобках указывается тип элементов массива.
//
//
//
//
//В отличие от типа Array для типа ReadonlyArray мы не можем принимать конструктор, как в следующем случае:
//
// const people: ReadonlyArray<string> = new ReadonlyArray("Tom", "Bob", "Sam");
//
// Вместо этого необходимо передать значения в виде обычного массива:
//
// const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];
//
// Для определения подобных массивов также можно использовать сокращение типа - readonly Тип_данных[]:
//
// const people: readonly string[]= ["Tom", "Bob", "Sam"];
//
// Массив ReadonlyArray поддерживаtт большинство тех же операций, что и обычные массивы, за тем исключением операций, которые изменяют массив и его элементы. Так, мы не можем менять отдельные значения:
//
// const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];
// people[1] = "Kate";     // ! Ошибка элементы массива ReadonlyArray нельзя изменить
//
// Также мы не можем добавлять новые или удалять уже имеющиеся элементы:
//
// const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];
//
// people.push("Kate");    // ! Ошибка -  нельзя добавить новые элементы
// people.pop();           // ! Ошибка -  нельзя удалить существующие элементы
//
// Более того при компиляции компилятор сообщит нам, что для типа ReadonlyArray не определены методы push() и pop(). Это относится ко всем операциям, которые изменяют массив.


//Вывод:
// Массивы простые:
// let arr: string[] = ["a", "b", "c"];
//
// Массивы ReadOnly:
// let arr: readonly string[] = ["a", "b", "c"];
//


//Декомпозиция массивов:
//
// const people: string[]= ["Tom", "Bob", "Sam"];
//
// const [first, second, third] = people;
// console.log(first);     // Tom
// console.log(second);    // Bob
// console.log(third);     // Sam
//
//
//С помощью оператора ... можно указать массив, в который будут помещаться все оставшиеся элементы раскладываемого массива, которые не вошли в предыдущие переменные/константы:
//
// const people: string[]= ["Tom", "Bob", "Sam"];
//
// const [first, ...rest] = people;
// console.log(first);     // Tom
// console.log(rest[0]);   // Bob
// console.log(rest[1]);       // Sam
//
//
//Также можно оставить пустое место вместо переменной/константы, если мы хотим пропустить соответствующий элемент массива:
//
// const people: string[]= ["Tom", "Bob", "Sam", "Kate"];
//
// const [, second, , forth] = people; // пропускаем первый и третий элементы массива
// console.log(second);        // Bob
// console.log(forth);         // Kate


/*
Кортежи (Tuples) также, как и массивы, представляют набор элементов, для которых уже заранее известен тип. В отличие от массивов кортежи могут хранить значения разных типов.

// определение кортежа - кортеж состоит из двух элементов - строки и числа
let user: [string, number];

Кортежи могут иметь необязательные элементы, для которых можно не предоставлять значение. Чтобы указать, что элемент является необязательным, после типа элемента ставится вопросительный знак ?:
let bob: [string, number, boolean?] = ["Bob", 41, true];
let tom: [string, number, boolean?] = ["Tom", 36];

С помощью оператора ... внутри определения типа кортежа можно определить набор элементов, количество которых неопределено. Например:
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];



*/



/*
Enum. Все его константы отражают состояния!!!

По умолчанию константы перечисления, как в примере выше, представляют числовые значения. То есть это так называемое числовое перечисление, в котором каждой константе сопоставляется числовое значение.

    Так, созданное выше в примере перечисление

enum Season { Winter, Spring, Summer, Autumn };

фактически эквивалентно следующему:

enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };

Хотя мы можем явным образом переопределить эти значения. Так, мы можем задать значение одной константы, тогда значения следующих констант будет увеличиваться на единицу:

enum Season { Winter=5, Spring, Summer, Autumn };           // 5, 6, 7, 8

Либо можно каждой константе задать свое значение:

enum Season { Winter=4, Spring=8, Summer=16, Autumn=32 };   // 4, 8, 16, 32

Также мы можем получить непосредственно текстовое значение:

enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };
var current: string = Season[2];    // 2 - числовое значение Summer
console.log(current);   // Summer


Кроме числовых перечислений в TypeScript есть строковые перечисления, константы которых принимают строковые значения:

enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето

Также можно определять смешанные перечисления, константы которых могут числа и строки.
enum Season {
    Winter = 1,
    Spring = "Весна",
    Summer = 3,
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);           // 3
console.log(Season.Autumn);     // Осень


*/



function insertIntoHeader(content : any) : void {
    document.getElementById("header").innerHTML = content.toString();
}

function addToHeader(content : any) : void {
    document.getElementById("header").innerHTML += content.toString() + "<br>";
}

//number ?: number <=== this parameter may not be present!


//У функции тоже есть свой тип!!!
//Однако, если у чисел - это numeric, а для строк - это string, то для функции - это её (параметры) => возвращаемый_тип
//То есть у такой функции:
// function hello (){
//     console.log("Hello TypeScript");
// };
// типом будет: () => void
//
//Однако не стоит путать тип функции со стрелочными функциями. Не забывай о том, что TS - это строго типизированный язык, поэтому если ты хочешь присвоить функцию в переменную, нужно указать её тип.
//Вот тут то и нужна такая запись:
// function hello (){
//     console.log("Hello TypeScript");
// };
//
// const message: ()=>void = hello;
// message();
//
// Другой пример - функция, которая принимает параметры и возвращает некоторый результат:
// function sum (x: number, y: number): number {
//     return x + y;
// };
//
// Она имеет тип (x:number, y:number) => number;, то есть принимает два параметра number и возвращает значение типа number.
//
//Также мы можем определять значения этого типа функции:
// let op: (x:number, y:number) => number;
//
// То есть переменная op представляет любую функцию, которая принимает два числа и которая возвращает число. Например:
// function sum (x: number, y: number): number {
//     return x + y;
// };
// function subtract (a: number, b: number): number {
//     return a - b;
// };
//
// let op: (x:number, y:number) => number;
//
// op = sum;
// console.log(op(2, 4));  // 6
//
// op = subtract;
// console.log(op(6, 4));  // 2


// Если определенный тип функции предстоит очень часто использовать, то для него оптимальнее определить псевдоним и обращаться к типу по этому псевдониму:
//
// type Operation = (a: number, b: number) => number;
//
// function mathOp(x: number, y: number, op: Operation): number{
//
//     return op(x, y);
// }
// const sum: Operation = function(x: number, y: number): number {
//     return x + y;
// };
//
// console.log(mathOp(10, 20, sum)); // 30


/*
* let person = {name:"Tom", age:23};
* По сути такая переменная имеет тип {name:string, age:number}
*
* То есть можно и так написать:
* let person: { name: string; age: number } = { name: "Tom", age: 23 };
*
* Если мы укажем ? после имени свойства объекта, то это свойство будет необязательным (также, как и параметры функции):
* let person: { name: string; age?: number }; // Свойство age - необязательное
*
* Оператор in позволяет проверить наличие определенного свойства в объекта:
* let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
let bob: { name: string; age?: number } = { name: "Bob"};


function printUser(user: { name: string; age?: number }){

    if("age" in user){
        console.log(`Name: ${user.name} Age: ${user.age}`);
    }
    else{
        console.log(`Name: ${user.name}`);
    }
}
printUser(tom);
printUser(bob);
*/

/*
* Если функция принимает объект в качестве параметра, то TypeScript позволяет автоматически разложить его на свойства:
* function printUser({name, age}: { name: string; age: number}) {
  console.log(`name: ${name}  age: ${age}`);
}

let tom = {name: "Tom", age: 36};
printUser(tom);
*
* Необязательное свойство:
* function printUser({name, age}: { name: string; age?: number}) {
* ...
*
* Свойство со значением по умолчанию:
* function printUser({name, age = 25}: { name: string; age?: number}) {
* ...
*
*/


/*
* Класс - это шаблон, а объект - экземпляр шаблона. Причем сам объект может быть создан по шаблону или литералом ("в строку")
*/


/*Расширение псевдонимов

Одни псевдонимы могут заимствовать или расширять код других. Для этого применяется операция &. Например:

type Person = {name: string; age: number};
type Employee = Person & {company: string};

В данном случае псевдоним Employee расширяет псевдоним Person, добавляя к нему свойство company, которое представляет тип string. То есть фактически мы имеем дело с типом:

type Employee = {name: string; age: number; company: string};*/
//То есть, по сути своей, декораторы нужны для того, чтобы вносить изменения в уже существующие объекты, не изменяя при этом сами объекты.


// function sealed(constructor: Function) {//https://chat.openai.com/c/4f79ae21-2e3e-4e86-9501-460715d4a2cd
//     console.log("sealed decorator");
//     Object.seal(constructor); //запрещаю изменять этот метод
//     Object.seal(constructor.prototype); //Запрещаю изменять класс этого объекта...
// }
//
//
//
// @sealed
// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     print():void {
//         console.log(this.name);
//     }
// }
//


// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     print(): void {
//         console.log(this.name);
//     }
// }
//
// let user: User = new User("Nick");
// user.print();
//
// User.prototype.print = () => console.log("ERROR!!!");
//
// user.print();
// let user1: User = new User("Nick1");
// user1.print();



// function logger<TFunction extends Function>(target: TFunction): TFunction{
//
//     let newConstructor: Function = function(name:string){
//         console.log("Creating new instance");
//         this.name = name;
//         this.age = 23;
//         this.print = function():void{
//             console.log(this.name, this.age);
//         }
//     }
//     return <TFunction>newConstructor;
// }
//
// // @ts-ignore
// @logger
// class User {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     print():void{
//         console.log(this.name);
//     }
// }
// let tom = new User("Tom");
// let bob = new User("Bob");
// tom.print();
// bob.print();


// With new constructor
// function newConstructorDecorator(constructor: Function): Function {
// // function newConstructorDecorator<UserConstFunc extends Function>(constructor: UserConstFunc): UserConstFunc {
//
//
//     let newConstructor: Function = function (name){
//         console.log("OBJECT CREATION");
//         this.name = name;
//         this.age = 22;
//         this.print = function () {
//             console.log("ERROR");
//         }
//     };
//     return newConstructor;
//
// }
//
// Or with old constructor
// function newConstructorDecorator(constructor: Function) {
//     constructor.prototype.email = "AZAZELLO@gmail.com";
// }
//
// // @ts-ignore
// @newConstructorDecorator
// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     print() {
//         console.log(`Hello, ${this.name}!`);
//     }
// }
//
//
// let user: User = new User("AZAZAZ!");
// // console.log(user.age);
// // console.log(user.email);
// user.print();
//
//
//!!!!!Следует учитывать, что замена конструктора приводит к полной замене всех свойств и методов класса.


//"...с помощью функции Object.seal запрещает расширение прототипа класса User."
//Фраза "запрещает расширение прототипа класса User" с помощью функции Object.seal относится к тому, что нельзя добавлять новые свойства или методы к прототипу объекта User, а также нельзя удалять или изменять существующие свойства и методы в плане их конфигурации. Это не касается наследования в классическом понимании, а скорее связано с изменением самого объекта прототипа.
// Расширение прототипа
//
// Когда мы говорим о "расширении прототипа", мы обычно имеем в виду добавление новых методов или свойств к прототипу объекта. Например, если у вас есть класс User, вы можете расширить его прототип следующим образом:
//
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// // Добавляем метод greet к прототипу User
// User.prototype.greet = function() {
//   return `Hello, my name is ${this.name}`;
// };


/*
Декоратор метода также представляет функцию, которая принимает три параметра:

function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor){
    console.log("Method is deprecated");
}

Декоратор принимает следующие параметры:

    1) Функция конструктора класса для статического метода, либо прототип класса для обычного метода.

    2) Название метода.

    3) Объект интерфейса PropertyDescriptor:

    interface PropertyDescriptor{
        configurable?: boolean;
        enumerable?: boolean;
        value?: any;
        writable?: boolean;
        get? (): any;
        set? (v: any): void;
    }

    Этот объект описывает изменение декорируемого метода. Применяется при компиляции в ES5 и выше, при ES3 имеет значение undefined.




*/
// function readable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.writable = false;
//     console.log(target); // то есть target - это объект (для обычных методов) (или клас для статических методов)
// }
//
//
// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     // @ts-ignore
//     @readable
//     print(): void {
//         console.log(this.name);
//     }
// }
//
// let user: User = new User("Nicholas");
//
// user.print();
// //
// user.print = () => console.log("Приветствую вас, создатель!");
//
// user.print();
//
// //todo: https://metanit.com/web/typescript/6.2.php <-- Параметры декоратора





function log(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: number[]){
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`)
        return returnValue;
        // return originalMethod;
    }
}

class Calculator{
    x: number = 5;

    // @ts-ignore
    @log
    add(x: number, y: number): number{
        return x + y;
    }
}


let calc = new Calculator();
let z = calc.add(4, 5);
z = calc.add(6, 7);
console.log(z);
console.log(calc); //returns object (like in JSON), so we can get values from it like this:
console.log(calc["x"]);//The way to get property value in JS/TS
console.log(calc["add"]);







//Итак:
// декораторы класса: function(constructor: Function) {} || function(constructor: Function):Function { return new Function} <-- для нового конструктора
// декораторы методов и их параметров: function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor){...} <--| 1) Функция конструктора класса для статического метода, либо прототип класса для обычного метода.
//                                                                                                                                    | 2) Название метода.
//                                                                                                                                    | 3) Объект интерфейса PropertyDescriptor:
//                                     function MyParameterDecorator(target: Object, propertyKey: string, parameterIndex: number){...} <-- (Декораторы параметров методов) ( первый параметр представляет конструктор класса, если метод статический, либо прототип класса, если метод нестатический. А второй параметр представляет имя метода. И третий параметр представляет порядковый индекс параметра в списке параметров.)
//
//Параметры декоратора
//
// Декоратор может принимать параметры, которые позволяют настроить из вне поведение декоратора. Например, немного изменим предыдущий пример:
//
// function readable(onlyRead : boolean){
//
//     return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.writable = !onlyRead;
//     };
// }
//
// class User {
//
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//
//     @readable(true)
//     print():void{
//         console.log(this.name);
//     }
// }
// let tom = new User("Tom");
// tom.print = function(){console.log("print has been changed");}
// tom.print();  // Tom
//
//
//
// декораторы свойств: function MyPropertyDecorator(target: Object, propertyKey: string){...} <-- первый параметр представляет конструктор класса, если свойство статическое, либо прототип класса, если свойство нестатическое. А второй параметр представляет имя свойства.
//
//
// Декоратор метода доступа:
//function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const oldSet = descriptor.set;
//
//     descriptor.set = function(value: string) {
//         if (value === "admin") {
//             throw new Error("Invalid value");
//         }
//         if(oldSet!==undefined) oldSet.call(this, value);
//     }
// }
// class User {
//
//     private _name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//
//     public get name(): string {
//         return this._name;
//     }
//     @validator
//     public set name(n: string) {
//         this._name = n;
//     }
// }
// let tom = new User("Tom");
// console.log(tom.name);
// tom.name= "admin";
// console.log(tom.name);
//ТО ЕСТЬ, ПО СУТИ, ТО ЖЕ САМОЕ, ЧТО И ДЕКОРАТОР МЕТОДА, ТОЛЬКО ИЗ PropertyDescriptor мы берем именно get/set, а не value
//
//
//Декораторы в TypeScript Очень похожи на аннотации в Java




//Фабрика декоратора представляет функцию, которая в свою очередь возвращает функцию декоратора.
//function regex(pattern: string){
//     let expression = new RegExp(pattern);
//     return function regex(target: Object, propertyName: string){
//         let propertyValue = this[propertyName];
//
//         // геттер
//         var getter = function () {
//             return propertyValue;
//         };
//
//         // сеттер
//         var setter = function (newVal: string) {
//             let isValid: boolean = expression.test(newVal);
//             if(isValid === false){
//                 throw new Error(`Value ${newVal} does not match ${pattern}`);
//             }
//             else{
//                 console.log(`${newVal} is valid`);
//             }
//         };
//         // удаляем свойство
//         if (delete this[propertyName]) {
//
//             // И создаем новое свойство с геттером и сеттером
//             Object.defineProperty(target, propertyName, {
//                 get: getter,
//                 set: setter
//             });
//         }
//     }
// }
// class Account{
//
//     @regex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
//     email: string;
//
//     @regex("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
//     phone: string;
//
//     constructor(email: string, phone: string){
//         this.email = email; this.phone = phone;
//     }
// }
// let acc = new Account("bir@gmail.com", "+23451235678");
// acc.email = "bir_iki_yedi";
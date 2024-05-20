/// <reference path="personnel.ts"/> //Triple-Slash Directive - same with import

let tom = new Personnel.Employee("Tom");
console.log(tom.name);

let sam = new Personnel.Manager("Sam");
console.log(sam.name);
/*
Псевдонимы

Возможно, нам приходится создавать множество объектов Data.Personnel.Employee, но каждый раз набирать полное имя класса с учетом пространств имен, вероятно, не всем понравиться, особенно когда модули имеют глубокую вложенность по принципу матрешки. Чтобы сократить объем кода, мы можем использовать псевдонимы, задаваемые с помощью ключевого слова import. Например:

namespace Data{
    export namespace Personnel {
        export class Employee {

            constructor(public name: string){
            }
        }
    }
}

import employee = Data.Personnel.Employee;
let tom = new employee("Tom")
console.log(tom.name);
*/

const header = document.getElementById("header");

// class User {
//     name: string; //поля в классе объявляются без ключевого слова let или const! => readonly != const
//     age: number;
//
//     constructor(name: string = "John", age: number = 24) {
//         this.name = name;
//         this.age = age;
//     }
//
//     print(): void {
//         console.log(`name: ${this.name}\nage: ${this.age}`);
//     }
//     toString(): string {
//         return `Name: ${this.name}<br>Age: ${this.age}<br>`;
//     }
// }
//
// let tom: User = new User();
// let alice: User = new User("Alice", 18);
//
// tom.print();
// header.innerHTML = tom.toString();
//
// alice.print();
// header.innerHTML += alice.toString();
//
// // let a: readonly number; <- так нельзя, так как readonly применим только к массивам, кортежам и полям объектов...


class Person {
    name: string;
    protected age: number;
    x: number = 9;

    // constructor(name: string = "John") {
    constructor(name: string, abc: number) {
        this.name = name;
        this.age = 5;
    }

    print(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Employee extends Person {
    company: string;
    x: number = 7;
    // constructor(company?: string, name?: string) {
    //     if (name !== undefined)
    //         super(name);
    //     else
    //         super();
    //
    //     if (company != undefined)
    //         this.company = company;
    //     else
    //         this.company = "unknown";
    // }
    public print(): void{
        console.log(this.name);
        console.log(this.age);
    }
}

let person: Person = new Person("A", 1);
let employee: Employee = new Employee("B", 1);
let employeePerson: Person = new Employee("C", 1);
let employeeEmployee: Employee = employeePerson as Employee;

console.log(person.x);
console.log(employee.x);
console.log(employeePerson.x);
console.log(employeeEmployee.x);

//
// person.print();
// employee.print();
// employeePerson.print();
// employeeEmployee.print();
// console.log(employeeEmployee.company)

// let employee: Employee = new Employee("AAA", 123);
// employee.print();




/*
Определение полей через конструктор

Использование модификаторов в параметрах конструктора позволяет сократить написание кода. Например, пусть у нас есть следующий класс:

class Person {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;
    }
    printPerson(): void {

        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}

Этот класс будет аналогичен следующему:

class Person {

    constructor(private name: string, private age: number) {  }

    printPerson(): void {

        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}

Используя модификаторы в параметрах конструктора, нам больше не надо явно создать свойства для этих параметров. Свойства создаются автоматически, называются они по имени параметров и имеют те же модификаторы, что и параметры.
*/

/*
Методы доступа get и set (акксессоры):
Использование аксессоров или методов доступа позволяет управлять тем, как значение устанавливается и как оно возвращается. В частности, мы можем переписать предыдущих класс с использованием акссессоров следующим образом:

class Person {
    name: string;
    private _age: number;
    private _name: string;

    public get age(): number {
        return this._age;
    }

    public set age(n: number) {
        if(n < 0 || n > 110){
            console.log("Недопустимый возраст!");
        }
        else{
            this._age = n;
        }
    }
}

let tom = new Person();
tom.name = "Tom";
tom.age = 36;
console.log(tom.age);   // 36
tom.age = -1243;        // Недопустимый возраст!
console.log(tom.age);   // 36

Методы доступа определяются как обычные методы, только перед ними ставятся ключевые слова get/set. Set-метод контроллирует установку значения, а get-метод возвращает значение.

*/

/*
Расширение интерфейса

TypeScript позволяет добавлять в интерфейс новые поля и методы, просто объявив интерфейс с тем же именем и определив в нем необходимые поля и методы. Например:

interface IUser {
    id: number;
    name: string;
}
interface IUser{
    age: number;
}
let employee: IUser = {

    id: 1,
    name: "Alice",
    age: 31
}

function printUser(user: IUser): void {

    console.log(`id: ${user.id}  name: ${user.name}  age: ${user.age}`);
}

printUser(employee);

В данном случае первое определение интерфейса IUser содержит поля id и name. Второе определение интерфейса содержит объявление поля age. В итоге объект или класс, который реализует этот интерфейс, должен определить все три поля - id, name и age.
*/

/*
Интерфейсы функций

Интерфейсы функций содержат определение типа функции. Затем они должны быть реализованы объектом, который представляет функцию данного типа:

interface FullNameBuilder {
    (name: string, surname: string): string;
}

let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}

let fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName); // Mr. Bob Simpson

Здесь определен интерфейс FullNameBuilder, который лишь содержит сигнатуру функции. Далее определяется переменная simpleBuilder, которая имеет тип FullNameBuilder и поэтому должна представлять функцию с данной сигнатурой.
*/

/*
Интерфейсы массивов

Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как, например, к массивам

interface StringArray {
    [index: number]: string;
}

let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];

let myPhone: string = phones[0];
console.log(myPhone);

Здесь определен интерфейс StringArray, который содержит сигнатуру массива. Эта сигнатура указывает, что объект, который реализует StringArray, может индексироваться с помощью чисел (объекта типа number). И, кроме того, данный объект должен хранить объекты типа string, то есть строки.

Выше индекс представлял тип number. Но мы можем использовать для индексации и тип string:

interface Dictionary {
    [index: string]: string;
}

var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["red"]);
*/

/*
То есть вывод:
Если интерфейс содержит сигнатуру функции, то он используется для определения функций особого вида ((name: string, surname: string): string;);
Если он содержит сигнатуру массива, то он определяет то, какие элементы массив будет содержать и как к ним обращаться ([index: string]: string;);
Если же он содержит сигнатуру объекта (поля и методы), то он описывает каким образом должен выглядеть объект (speed: number; move(): void;).
*/

//todo: https://metanit.com/web/typescript/3.9.php
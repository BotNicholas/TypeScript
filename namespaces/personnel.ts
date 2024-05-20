namespace Personnel {
    export class Employee { //export means that this class (or interface, function, variable, constant) will be accessible from outside
        constructor(public name: string) {
        }
    }

    export class Manager {
        constructor(public name: string) {
        }
    }
}


//По сути пространство имён - это просто группа классов, интерфейсов, функций, других пространств имён, переменных и констант, которые могут использоваться в каком-то другом месте...
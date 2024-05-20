var Personnel;
(function (Personnel) {
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Personnel.Employee = Employee;
    var Manager = /** @class */ (function () {
        function Manager(name) {
            this.name = name;
        }
        return Manager;
    }());
    Personnel.Manager = Manager;
})(Personnel || (Personnel = {}));

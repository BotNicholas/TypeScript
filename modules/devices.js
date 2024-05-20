var Phone = /** @class */ (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
export { Phone };
export function call(phone) {
    console.log("Make a call by", phone.name);
}
//or
// interface Device{
//     name: string;
// }
//
// class Phone implements Device {
//     name: string;
//     constructor(n:string){
//         this.name = n;
//     }
// }
//
// function call(phone: Phone) : void{
//     console.log("Make a call by", phone.name);
// }
// export {Device, Phone, call};

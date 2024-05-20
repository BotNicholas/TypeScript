// import hello from "./message.js"; //we did not specifyed what we want to export, so default type will be exported (function hello) and an alias will be created (hello1)
//
// hello();
//
// //tsc main.ts --module esnext  - to compile
import { Phone, call } from "./devices";
var iphone = new Phone("iPhone X");
call(iphone);

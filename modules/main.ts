// import hello from "./message.js"; //we did not specifyed what we want to export, so default type will be exported (function hello) and an alias will be created (hello1)
//
// hello();
//
// //tsc main.ts --module esnext  - to compile

import {Phone, call} from "./devices";
let iphone: Phone = new Phone("iPhone X");
call(iphone);

// Можно импортировать сразу весь модуль:
// import * as dev from "./devices.js";

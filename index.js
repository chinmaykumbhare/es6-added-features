// console.log("hello world!");

import {forES6} from './for.js';
import {concatES6} from './concat.js';
import { staff } from './staff.js';
import {seperator} from './arrow.js';
import {arrowWithParam} from './arrow-param.js';
import { outerFunction } from './oldThis.js';
import { defaultParam } from './default-param.js';
import { listIterator } from './forEachES6.js';
import { constructorES6 } from './constructorES6.js';
import { HelloWorld } from './newConstructor.js';
import { ChildConstructor } from './childConstructor.js';
import { promiseDemo } from './promise.js';
import { setES6 } from './set.js';
import { calculator } from './map.js';

/**
 * OLD: var dev = "chinmay kumbhare"
 * Problem? -> values can easily be modified
 */

let trainer = "vina patil";
console.log("Trainer: " +trainer);
seperator();
trainer = "sumit joshi";
console.log("Updated Trainer: " +trainer);
seperator();
const dev = "chinmay kumbhare";
console.log("Developed by " +dev);
seperator();
/**
 * Error:
 * dev = "priyanka rana";
 *     ^
 * TypeError: Assignment to constant variable.
 */

/**
 * Block Scoping:
 * variables available only between {}
 */

{
    console.log("In Block");
    let day = "friday";
    console.log(day);
}

console.log("Outside Block");
let day = "saturday";
console.log(day);

seperator();

forES6();
seperator();
concatES6();
seperator();
console.log(staff("sumit joshi", "trainer"));
console.log(staff("priyanka rana", "team leader"));
seperator();
arrowWithParam("chinmay", 23);
seperator();
outerFunction();
seperator();
defaultParam();
defaultParam(10, 20);
seperator();
listIterator();
seperator();
console.log("Traditional Constructor:\n");
let obj = new constructorES6("chinmay", 0, 23);
obj.hello();
seperator();
console.log("ES6 Constructor:\n");
let helloUser = new HelloWorld("chinmay");
helloUser.sayHello();
seperator();
console.log("Child Class:\n");
helloUser = new ChildConstructor("chinmay", 23);
helloUser.sayHello();
seperator();
promiseDemo.then((data) => {
    console.log(data);
})
setTimeout(() => {
    seperator();
}, 300);
//catching the error
promiseDemo.catch((error) => {
    console.log(error);
})
setES6();
seperator();
const map = new Map();
map.set("Addition", calculator.add(1, 2));
map.set("Subtraction", calculator.sub(10, 2));
console.log(map);
calculator.list.map((items, index) => {
    console.log(items);
})
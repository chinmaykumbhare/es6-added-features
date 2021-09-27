import { HelloWorld } from "./newConstructor.js";

class ChildConstructor extends HelloWorld {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayHello() {
        console.log("Hello " +this.name +"! How is life at " +this.age +"?");
    }
}

export {ChildConstructor};
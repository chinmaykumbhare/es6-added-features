class HelloWorld {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello " +this.name +"!");
    }
}

export {HelloWorld};
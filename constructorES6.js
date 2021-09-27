function constructorES6(name, experience, age) {
    this.name = name;
    this.experience = experience;
    this.age = age;
}

constructorES6.prototype.hello = function() {
    console.log("Hello " +this.name);
}

export {constructorES6}
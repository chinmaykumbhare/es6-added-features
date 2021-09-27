function forES6 () {
    let tasks = [
        "-ES6 added features",
        "-Set & Map",
        "-proto & prototype - example to explain",
        "-call/apply/bind - examples to explain",
        "-Closures"
    ];
    console.log("TASKS:");
    for(let item of tasks) {
        console.log(item);
    }
}

export {forES6};
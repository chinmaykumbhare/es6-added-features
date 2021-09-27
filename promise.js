const promiseDemo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(420);
        // reject(new Error("Oops! Something went wrong!"));
    }, 300);
});

export {promiseDemo};
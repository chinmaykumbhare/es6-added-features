const setES6 = () => {
    const set = new Set();
    while(set.size < 10) {
        set.add(Math.round(Math.random() * 10));
    }

    console.log(...set);
    //with index
    console.log(set.entries());
    //only values
    console.log(set.values());

}

export {setES6};
const listIterator = () => {
    const list = [10, 11, 12, 13, 14, 15];
    
    list.map((item, index) => {
        console.log(index +": " +item);
    })

    //get everything except 12
    const element = list.filter(item => item !== 12);
    console.log(element);
    //get 12
    const element2 = list.filter(item => item == 12);
    console.log(element2);
}

export {listIterator};
//since it's js, this is not weird. all all. XD

const outerFunction = () => {
    let obj = {
        name: "chinmay",

        innerFunction: function() {
            //******************THIS******************
            let anotherThis = this;
            //******************THIS******************
            const oldInner = function() {
                console.log(anotherThis.name);
            }
            oldInner();

            const newInner = () => {
                console.log(this.name);
            }
            newInner();
        }
    }

    obj.innerFunction();
}

export {outerFunction};
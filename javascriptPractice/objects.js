const obj = {};

const obj1 = new Object();

Object.defineProperty(obj1, "name",{
    get: function(){return "altamish"},
    enumerable: true
});

Object.defineProperty(obj1, "myname",{
    value: "myaltamish ",
    enumerable: true
});




// console.log(obj1.myname);


const obj2 = {name: "altamish",class: 12};

const proto = Object.getPrototypeOf(obj2);
// console.log(proto);


const obj3 = {
    name: "altamish",
    setName: function(){
        this.name = "altamish weds rikhsar"
        return this;
    }
}

// console.log(obj3);
// obj3.setName().setName().setName();
// console.log(obj3);



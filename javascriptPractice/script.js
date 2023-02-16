Object.prototype.trueLen = function(){
    return this.trim().length;
}

// console.log(Object.prototype);

const name = "altamish        ";

const arr = [1,2,3];

// console.log(arr);


const user = {
    name: "ältamish",
    isGreatMan: true
}

const student = {
    rollNumber: 1232,
    class: 12,
}

Object.setPrototypeOf(student,user)

console.log(student.isGreatMan);
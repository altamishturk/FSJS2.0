const even = [];
const odd = [];
let num = 0;

while (num <= 100) {
    if(num%2 === 0){
        even.push(num);
    }
    else{
        odd.push(num);
    }
    num++
}

console.log(even);
console.log(odd);
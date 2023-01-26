const age = Number(prompt("Enter your age:"));

if(age > 18){
console.log('You are old enough to drive');
}
else{
    console.log(`wait for the ${18-age} years to drive`);
}
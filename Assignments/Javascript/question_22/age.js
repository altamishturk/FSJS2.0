const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort array in assending order 
ages.sort((a,b)=> a-b);

// find min age 
const minAge = ages[0];
// find max age 
const maxAge = ages[ages.length-1];

console.log(`Min age: ${minAge}, Max age: ${maxAge}`);

// check if the number is even or odd 
// if even then there will be two median 
// if odd there will be one median 
if(ages.length % 2 === 0){
    console.log(`Middle ages: ${ages[(ages.length/2)]} ${ages[(ages.length/2)-1]}`);
}
else {
    console.log(`Middle ages: ${ages[Math.ceil(ages.length/2)]}`);
}

// calculate sum of ages 
const totalAges = ages.reduce((a,b)=> a+b,0);

// calculate avrages of ages 
const avrage = totalAges/ages.length;

console.log(`Avrage Age: ${avrage}`);

console.log(`Range of ages: ${maxAge-minAge}`);

console.log(`${Math.abs(minAge-avrage)} ${Math.abs(maxAge-avrage)}`);


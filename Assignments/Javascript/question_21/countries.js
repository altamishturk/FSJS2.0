const countries =  ["india","pakistan","bangladesh","US","UK","Canada"];


if (countries.indexOf("Ethiopia") !== -1) {
    console.log("ETHIOPIA");
}
else {
    countries.push("Ethiopia");
}

console.log(countries);
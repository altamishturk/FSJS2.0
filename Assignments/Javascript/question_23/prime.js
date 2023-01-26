function isPrime(num){

    let temp = 2;

    while (num > temp) {
        const ans = num%temp;
        if(ans === 0){
            console.log(`${num} is not a prime number`);
            break;
        }
        else {
            temp++;
        }
    }
    
    if(temp === num){
        console.log(`${num} is a prime number`);
    }
}

isPrime(8);
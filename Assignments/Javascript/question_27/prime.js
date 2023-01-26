
for (let index = 3; index < 100; index++) {
    let num = 2;
    while (num < index) {
        const ans = index%num;
        // console.log(ans,index);
        if(ans === 0){
            break;
        }
        else {
            num++;
        }
    }
    if(num === index){
        console.log(index);
    }
}
function gradeCalculator(marks){


    if(marks > 80){
        console.log("A");
    }
    else if (marks > 70 && marks < 79) {
        console.log("B");
    }
    else if (marks > 60 && marks < 69) {
        console.log("C");
    }
    else if (marks > 50 && marks < 59) {
        console.log("D");
    }
    else{
        console.log("F");
    }
}


gradeCalculator(45)
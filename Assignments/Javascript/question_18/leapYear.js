function numberOfDays(month){
    if(month == "January" || month == "December " || month == "October" || month == "August" || month == "July" || month == "May" || month == "March" ){
        console.log(`${month} have 31 days`);
    }
    else if (month == "February") {
        if(new Date(new Date().getFullYear(),02,0).getDate() === 28){
            console.log("29 days this is leap year");
        }
        else {
            console.log("28 days");
        }
    }
    else{
        console.log(`${month} have 30 days`);
    }
}

numberOfDays("February")
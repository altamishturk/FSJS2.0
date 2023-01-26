function numberOfDays(month){
    if(month == "January" || month == "December " || month == "October" || month == "August" || month == "July" || month == "May" || month == "March" ){
        console.log(`${month} have 31 days`);
    }
    else if (month == "February") {
        console.log("28 days (29 days in a leap year)");
    }
    else{
        console.log(`${month} have 30 days`);
    }
}

numberOfDays("April")
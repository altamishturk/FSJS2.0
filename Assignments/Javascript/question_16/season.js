function checkSeason(month){

    if(month === "September" || month === "October" || month === "November"){
        console.log("the season is Autumn.");
    }
    else if (month === "December" || month === "January" || month === "February") {
        console.log("the season is Winter.");
    }
    else if (month === "March" || month === "April" || month === "May") {
        console.log("the season is Spring");
    }
    else {
        console.log("the season is Summer");
    }
}


checkSeason("June");
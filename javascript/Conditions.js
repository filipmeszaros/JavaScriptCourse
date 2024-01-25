let flag = false;

if (flag) {
    console.log('Flag is set to true');
} else if (flag === false) {
    console.log('Flag is set to false');
} else {
    console.log('Flag is null or undefined');
}


switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.error('Something went wrong with Date().getDay()');
}

console.log('Today is ' + day);
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn){
    console.log("Vítej na stránce")
    if (isAdmin) {
        console.log("Přístup do administrátorského panelu je povolen")
    } else {
        console.log("Přístup jako uživatel")
    }
}

let age = 20;
let hasDriversLicense = false;

if (age>= 18 && hasDriversLicense) {

} else {
    console.log("Smí řídit AUTO")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("MAS VOLNO")
} else {
    console.log("VROOM VROOM JEDEMMM")
}
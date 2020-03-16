let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let runnerAge = 18;
if (early && runnerAge > 18) {
    raceNumber += 1000;
}
if (early && runnerAge > 18) {
    console.log(`Your race will begin at 9:30am. Your race number is: ${raceNumber}.`);
} else if (!early && runnerAge > 18) {
    console.log(`Your race will begin at 11:00am. Your race number is: ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Your race will begin at 12:30pm. Your race number is: ${raceNumber}.`);
} else {
    console.log(`Please approach the registration desk. Thank You!`)
}
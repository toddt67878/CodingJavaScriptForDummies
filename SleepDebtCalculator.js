const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 10;
            break;
        case 'sunday':
            return 8;
            break;
        default:
            return 'Error: invalid date!'
    }
};
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') + getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') + getSleepHours('saturday') +
    getSleepHours('sunday');
//console.log(getSleepHours('monday'));
//console.log(getActualSleepHours());
const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. You should get some rest');
    } else {
        console.log('Error! Something went wrong. Check your code');
    }
};
calculateSleepDebt();
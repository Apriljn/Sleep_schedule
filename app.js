
//Here sleep hours were calculated

//check how many hours user sleeps each night
const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 7;
        case 'Tuesday':
            return 9;
        case 'Wednesday':
            return 5;
        case 'Thursday':
            return 8;
        case 'Friday':
            return 7;
        case 'Saturday':
            return 4;
        case 'Sunday':
            return 8;
        default:
            return 'Error.';
    }
};

//add all sleep hours during the week
const getActualSleepHours = () => {
    return (
        getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday')
    );
};

//write the ideal time user need to sleep
const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

//check and return statements based on user sleep hours
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You have perfect ammount of sleep.');
    }
    if (actualSleepHours > idealSleepHours) {
        console.log(
            'You got ' +
            (actualSleepHours - idealSleepHours) +
            ' hour(s) more sleep than you needed this week. Get less sleep.'
        );
    }
    if (actualSleepHours < idealSleepHours) {
        console.log(
            'You got ' +
            (idealSleepHours - actualSleepHours) +
            ' hour(s) less sleep than you needed this week. Get some rest.'
        );
    }
}

//start the programm
calculateSleepDebt();

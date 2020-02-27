// Declare required variables
const vacationType = prompt('What kind of trip would you like to go on, musical, tropical, or adventurous?').toLowerCase();
const groupSize = prompt('How many are in your group?');

// Compare user input to determine destination
function dest() {
    let recommendation = '';

    if (vacationType == 'musical') {
        recommendation = 'New Orleans';
    } else if (vacationType == 'tropical') {
        recommendation = 'Beach Vacation in Mexico';
    } else if (vacationType == 'adventurous') {
        recommendation == 'Whitewater Rafting the Grand Canyon';
    } else {
        alert('Please choose either "musical", "tropical", or "adventurous".');
        window.location.reload(false);
        return;
    }
    return recommendation;
};

function transport() {
    let recommendation = '';

    if (groupSize >= 6) {
        recommendation = 'Charter Flight';
    } else if (groupSize >= 2) {
        recommendation = 'Helicopter';
    } else {
        recommendation = 'First Class';
    }
    return recommendation;
};

const destination = dest();
const transportMethod = transport();
const result = `You have a group of ${groupSize}, and would like to go on a ${vacationType} vacation. We recommend a trip to ${destination}, and with a group that size, you should take a ${transportMethod} to get there.`;
console.log(result);
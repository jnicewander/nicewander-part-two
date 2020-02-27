// Declare required variables
const vacationType = prompt('What kind of trip would you like to go on musical, tropical, or adventurous?').toLowerCase();
const groupSize = prompt('How many are in your group?');

// Compare user input to determine destination
function dest() {
    let recommendation = '';

    if (vacationType == 'musical') {
        recommendation = 'New Orleans';
    } else if (vacationType == 'tropical') {
        recommendation = grammar + 'a sunny beach vacation in Mexico';
    } else if (vacationType == 'adventurous') {
        recommendation = grammar + 'try whitewater rafting the Grand Canyon';
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
        recommendation = 'schedule a charter flight';
    } else if (groupSize >= 2) {
        recommendation = 'book a helicopter ride';
    } else {
        recommendation = 'fly first class';
    }
    return recommendation;
};

const destination = dest();
const transportMethod = transport();
const result = `Since you have a group of ${groupSize} and would like to go on a ${vacationType} vacation, you should ${transportMethod} to ${destination}.`;
console.log(result);
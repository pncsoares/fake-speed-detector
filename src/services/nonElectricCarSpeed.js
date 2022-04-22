/**
 * Returns a message (speed sound) based on the inputted speed
 * 
 * Only works with non electric cars
 * 
 * @param {*} speed 
 */
export default function getNonElectricCarSound(speed) {

    let message = '';

    if (speed < 10) {
        message = 'tr tr tr tr tr'
    }
    else if (speed < 50) {
        message = 'vroom';
    }
    else if (speed < 90) {
        message = 'vroooom';
    }
    else if (speed < 120) {
        message = 'vrooooooom';
    }
    else if (speed < 160) {
        message = 'vrooooooooooooom';
    }
    else if (speed < 200) {
        message = 'vrooooooooooooooooooom';
    }
    else {
        message = 'vrooooooooooooooooooooooooooooooom';
    }

    return message;
}
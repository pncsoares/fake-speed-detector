/**
 * Returns a message (speed sound) based on the inputted speed
 * 
 * Only works with electric cars
 * 
 * @param {*} speed 
 */
 export default function getElectricCarSound(speed) {

    let message = '';

    if (speed < 10) {
        message = 'zzz'
    }
    else if (speed < 50) {
        message = 'sssss';
    }
    else if (speed < 90) {
        message = 'sssssss';
    }
    else if (speed < 120) {
        message = 'ssssssssss';
    }
    else {
        message = 'low battery';
    }

    return message;
}
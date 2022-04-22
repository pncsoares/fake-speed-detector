import readline from 'readline';
import getElectricCarSound from './services/electricCarSpeed.js';
import log from './services/logger.js';
import getNonElectricCarSound from './services/nonElectricCarSpeed.js';
import verifyIfItIsGoingForward from './services/speed.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

rl.question('Input a speed in Km/h\n> ', (speed) => {

    verifyIfItIsGoingForward(speed);

    rl.question('\nIs it an electric car?\n[y] yes\n[n] no\n> ', (isElectric) => {

        let message = '';

        if (isElectric === 'y') {
            message = getElectricCarSound(speed);
        }
        else {
            message = getNonElectricCarSound(speed);
        }

        log(message);
    
        rl.close();
    });
});
import readline from 'readline';
import log from './services/logger.js';
import verifyIfItIsGoingForward from './services/speed.js';
import getElectricCarSound from './services/electricCarSpeed.js';
import getNonElectricCarSound from './services/nonElectricCarSpeed.js';

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
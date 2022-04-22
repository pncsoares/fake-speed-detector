import close from './process.js';
import log from './logger.js';
import { 
    backwardsMessage,
    idleMessage
 } from '../constants/messages.js';

/**
 * 
 * @param {*} speed 
 */
export default function verifyIfItIsGoingForward(speed) {

    let message = '';

    if (speed < 0) {
        message = backwardsMessage;
    }
    else if (speed == 0) {
        message = idleMessage;
    }

    if (message !== '') {
        log(message);
        close();
    }
}
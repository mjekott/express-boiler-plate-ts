import {
    cleanEnv
} from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {

    });
}

export default validateEnv;
import * as moment from 'moment';
import { IAction } from '../interfaces';
import { START_COUNTDOWN, UPDATE_COUNT_VALUE } from './types';

export const startCountDown = (countDownStarted: boolean): IAction => {
    return {
        payload: {
            countDownStarted
        },
        type: START_COUNTDOWN
    };
}

export const updateCountValue = (newCount: string = '00:00:00'): IAction => {
    return {
        payload: {
            countValue: moment(newCount, 'HH:mm:ss')
        },
        type: UPDATE_COUNT_VALUE
    };
}
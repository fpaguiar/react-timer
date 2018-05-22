import { IAction } from '../interfaces';
import { START_COUNTDOWN, UPDATE_COUNT_VALUE } from './types';

export const startCountDown = (start: boolean): IAction => {
    return {
        payload: {
            start
        },
        type: START_COUNTDOWN
    };
}

export const updateCountValue = (newCount: number): IAction => {
    return {
        payload: {
            countValue: newCount
        },
        type: UPDATE_COUNT_VALUE
    };
}
import { UPDATE_COUNT_VALUE, UPDATE_TIMER } from '../actions/types';
import { IAction } from '../interfaces';

export default function(state: any = {}, action: IAction) {
    switch(action.type) {
        case UPDATE_TIMER:
            return Object.assign({}, state, action.payload);
        case UPDATE_COUNT_VALUE:
            return Object.assign({}, state, action.payload);

        default:
        return state;
    }
};
import {ActionTypes} from './constants';

const defaultState = {
    type: ['no type']
};


export default function SearchReducer(state = defaultState, action){
    switch(action.type){
        case ActionTypes.SET_TYPE:
            return { ...state, users:action.payload };
        default:
            return state;
    }
}
import {ActionTypes} from './constants';
export const setType = (type) => ({
    type:ActionTypes.SET_TYPE,
    payload:type
})
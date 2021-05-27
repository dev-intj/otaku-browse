import { ActionTypes } from './constants';

const defaultState = {
    
    type: 'anime',
    genre: '',
    year: 2021,
    season: '',
    format: '',
};


export default function SearchReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.SET_TYPE:
            return { ...state, type: action.payload };
        case ActionTypes.SET_GENRE:
            return { ...state, genre: action.payload };
        case ActionTypes.SET_FORMAT:
            return { ...state, format: action.payload };
        case ActionTypes.SET_SEASON:
            return { ...state, season: action.payload };
        case ActionTypes.SET_YEAR:
            return { ...state, year: action.payload };
        default:
            return state;
    }
}
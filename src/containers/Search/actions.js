import {ActionTypes} from './constants';

export const setType = (type) => ({
    type:ActionTypes.SET_TYPE,
    payload:type
})

export const setYear = (year) => ({
    type:ActionTypes.SET_YEAR,
    payload:year
})

export const setFormat = (format) => ({
    type:ActionTypes.SET_FORMAT,
    payload:format
})

export const setGenre = (genre) => ({
    type:ActionTypes.SET_GENRE,
    payload:genre
})

export const setSeason = (season) => ({
    type:ActionTypes.SET_SEASON,
    payload:season
})


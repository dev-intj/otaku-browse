import {createSelector} from 'reselect';

const searchPageState = (state) => state.SearchReducer;

export const makeSelectType = createSelector(
    searchPageState,
    (searchPage) => searchPage.type
);
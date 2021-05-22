import {createStore, combineReducers} from "redux";
import SearchReducer from './containers/Search/reducers';

const reducers = combineReducers({SearchReducer});

export default createStore(reducers);
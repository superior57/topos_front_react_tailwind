import {combineReducers} from 'redux';
import routines from './routines.reducer';
import routine from './routine.reducer';
import card from './card.reducer';

const reducer = combineReducers({
    routines,
    routine,
    card
});

export default reducer;

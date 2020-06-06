import {combineReducers} from 'redux';
import boards from './boards.reducer';
import board from './board.reducer';
import card from './card.reducer';

const scrumboardAppReducers = combineReducers({
    boards,
    board,
    card
});

export default scrumboardAppReducers;

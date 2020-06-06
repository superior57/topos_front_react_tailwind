import {combineReducers} from 'redux';
import notes from './notes.reducer';
import labels from './labels.reducer';

const reducer = combineReducers({
    notes,
    labels
});

export default reducer;

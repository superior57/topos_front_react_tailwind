import {combineReducers} from 'redux';
import todos from './todos.reducer';
import folders from './folders.reducer';
import labels from './labels.reducer';
import filters from './filters.reducer';

const reducer = combineReducers({
    todos,
    folders,
    labels,
    filters
});

export default reducer;

import {combineReducers} from 'redux';
import files from './files.reducer';
import selectedItemId from './selectedItemIdReducer';

const reducer = combineReducers({
    files,
    selectedItemId
});

export default reducer;

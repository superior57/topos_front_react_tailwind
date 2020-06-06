import {combineReducers} from 'redux';
import events from './events.reducer';

const reducer = combineReducers({
    events
});

export default reducer;

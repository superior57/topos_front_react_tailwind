import {combineReducers} from 'redux';
import widgets from './widgets.reducer';
import projects from './projects.reducer';

const reducer = combineReducers({
    widgets,
    projects
});

export default reducer;

import {combineReducers} from 'redux';
import teams from './teams.reducer';
import team from './team.reducer';

const reducer = combineReducers({
    teams,
    team
});

export default reducer;

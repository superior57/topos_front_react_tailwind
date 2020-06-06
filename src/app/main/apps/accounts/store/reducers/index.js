import {combineReducers} from 'redux';
import accounts from './accounts.reducer';
import account from './account.reducer';
import users from './users.reducer';
import teams from './teams.reducer';

const reducer = combineReducers({
    accounts,
    account,
    users,
    teams
});

export default reducer;

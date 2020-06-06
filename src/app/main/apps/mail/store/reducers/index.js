import {combineReducers} from 'redux';
import mails from './mails.reducer';
import mail from './mail.reducer';
import folders from './folders.reducer';
import labels from './labels.reducer';
import filters from './filters.reducer';

const reducer = combineReducers({
    mails,
    mail,
    folders,
    labels,
    filters
});

export default reducer;

import {combineReducers} from 'redux';
import courses from './courses.reducer';
import course from './course.reducer';

const reducer = combineReducers({
    courses,
    course
});

export default reducer;

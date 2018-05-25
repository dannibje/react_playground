

import * as types from './actionTypes';
import {Observable} from 'rxjs';

export function createCourse(course){
    return {type: types.CREATE_COURSE, course: course};
}

// export const createCourseEpic = (action$) =>
//     actions$.ofType(types.CREATE_COURSE)
//         .function(){
//             console.log('whats up observable');
//         }
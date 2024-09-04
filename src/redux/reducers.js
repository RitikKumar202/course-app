import { FETCH_COURSES, ENROLL_COURSE, MARK_COURSE_COMPLETE } from './actions';

const initialState = {
    courses: [],
    enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses')) || [],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            return {
                ...state,
                courses: action.payload,
            };
        case ENROLL_COURSE:
            const enrolledCourses = [
                ...state.enrolledCourses,
                state.courses.find(course => course.id === action.payload)
            ];
            localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
            return {
                ...state,
                enrolledCourses,
            };
        case MARK_COURSE_COMPLETE:
            const updatedCourses = state.enrolledCourses.map(course =>
                course.id === action.payload
                    ? { ...course, completed: true }
                    : course
            );
            localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
            return {
                ...state,
                enrolledCourses: updatedCourses,
            };
        default:
            return state;
    }
};

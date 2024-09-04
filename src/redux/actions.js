export const FETCH_COURSES = 'FETCH_COURSES';
export const ENROLL_COURSE = 'ENROLL_COURSE';
export const MARK_COURSE_COMPLETE = 'MARK_COURSE_COMPLETE';

export const fetchCourses = (courses) => ({
    type: FETCH_COURSES,
    payload: courses,
});

export const enrollCourse = (courseId) => ({
    type: ENROLL_COURSE,
    payload: courseId,
});

export const markCourseComplete = (courseId) => ({
    type: MARK_COURSE_COMPLETE,
    payload: courseId,
});

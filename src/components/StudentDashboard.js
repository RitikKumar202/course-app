import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseComplete } from '../redux/actions';
import '../styles/studentDashboard.css';

const StudentDashboard = () => {
    const enrolledCourses = useSelector(state => state.enrolledCourses);
    const dispatch = useDispatch();

    const handleMarkComplete = (id) => {
        const course = enrolledCourses.find(course => course.id === id);
        if (!course.completed) {
            dispatch(markCourseComplete(id));
        }
    };

    return (
        <div className="student-dashboard">
            <h2>My Courses</h2>
            <div className="enrolled-courses">
                {enrolledCourses.length > 0 ? (
                    enrolledCourses.map(course => (
                        <div key={course.id} className="enrolled-course">
                            <div className="enrolled-course-thumbnail">
                                <img src={course.thumbnail} alt={course.name} />
                            </div>
                            <div className="enrolled-course-info">
                                <h3>{course.name}</h3>
                                <p>Instructor: {course.instructor}</p>
                                <p>Due Date: {course.dueDate}</p>


                            </div>
                            <div className='enrolled-course-action'>
                                <div className="progress-bar">
                                    <progress className="progress" value={course.completed ? 100 : 0} max="100"></progress>
                                </div>
                                <button
                                    onClick={() => handleMarkComplete(course.id)}
                                    className="mark-complete"
                                    disabled={course.completed}
                                >
                                    {course.completed ? "Completed" : "Mark as Complete"}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No enrolled courses</p>
                )}
            </div>
        </div>
    );
};

export default StudentDashboard;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse } from '../redux/actions';
import "../styles/courseDetail.css";

const CourseDetails = () => {
    const { id } = useParams();
    const course = useSelector(state =>
        state.courses.find(course => course.id === parseInt(id))
    );
    const enrolledCourses = useSelector(state => state.enrolledCourses);
    const dispatch = useDispatch();

    const isEnrolled = enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id);

    const handleEnroll = () => {
        if (!isEnrolled) {
            dispatch(enrollCourse(course.id));
        }
    };

    if (!course) return <div>Course not found</div>;

    return (
        <div className="course-details">
            <div className="course-thumbnail">
                <img src={course.thumbnail} alt={course.name} />
            </div>
            <h3 className="course-title">{course.name}</h3>
            <div className="course-info">
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Status:</strong> {course.enrollmentStatus}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Schedule:</strong> {course.schedule}</p>
                <p><strong>Location:</strong> {course.location}</p>
                <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
                <details className="course-syllabus">
                    <summary>Syllabus</summary>
                    <ul>
                        {course.syllabus.map((item, index) => (
                            <li key={index}>
                                <strong>Week {item.week}:</strong> {item.topic}
                                <p>{item.content}</p>
                            </li>
                        ))}
                    </ul>
                </details>
            </div>
            <button className='enroll-btn' onClick={handleEnroll} disabled={isEnrolled}>
                {isEnrolled ? "Already Enrolled" : "Enroll Course"}
            </button>
        </div>
    );
};

export default CourseDetails;

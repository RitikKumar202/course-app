import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/courseCard.css';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <img src={course.thumbnail} alt={course.name} className="course-card-thumbnail" />
            <div className="course-card-content">
                <h3 className="course-card-title">{course.name}</h3>
                <p className="course-card-instructor">Instructor: {course.instructor}</p>
                <p className="course-card-description">{course.description}</p>
                <Link to={`/course/${course.id}`} className="course-card-link">View Details</Link>
            </div>
        </div>
    );
};

export default CourseCard;

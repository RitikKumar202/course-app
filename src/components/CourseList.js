import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../redux/actions';
import CourseCard from './CourseCard';
import SearchBar from './SearchBar';
import { mockCourses } from '../mockData';
import '../styles/courseList.css';

const CourseList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        // Use mock data instead of API call
        dispatch(fetchCourses(mockCourses));
    }, [dispatch]);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="course-list-container">
            <SearchBar setSearchTerm={setSearchTerm} />
            <div className="course-list">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <p>No courses found</p>
                )}
            </div>
        </div>
    );
};

export default CourseList;

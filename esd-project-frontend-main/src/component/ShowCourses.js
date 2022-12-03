import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ShowCourses() {
    const [myCourse, setMyCourse] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get("http://localhost:8080/esd-1.0-SNAPSHOT/api/course/getCourse");
                const data = await response.data;
                setMyCourse(data);
            }
            fetchData();
        } catch (e) {
            console.log(e);
        }

    });
    return (
        <div className='container'>
            <div className='row'>
                {
                    myCourse?.map(course =>
                        <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>Course code: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{course.courseCode}</div>
                                    <div className='card-text'>Course Name:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {course.courseName}</div>
                                    <div className='card-text'>Credits:     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {course.credits}</div>
                                    <div className='card-text'>Capacity:    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {course.capacity}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

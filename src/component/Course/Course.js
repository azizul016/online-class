import React from 'react';
import './Course.css';

const Course = (props) => {
    const handleAddCourse = props.handleAddCourse;
    const {img, name, price, author} = props.course;
    // console.log(props.course);
    return (
       <div className="d-flex">
            <div className="col-md-4">
                <div className="card" style={{width: '18rem'}}>
                    <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p><small>By {author}</small></p>
                    <h5>${price}</h5>
                    <a href="#" onClick={() => handleAddCourse(props.course)} className="btn btn-primary">Enroll Now</a>
                </div>
                </div>
            </div>
       </div>
    );
};

export default Course;
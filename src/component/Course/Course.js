import React from 'react';
import './Course.css';

const Course = (props) => {
    const handleAddCourse = props.handleAddCourse;
    const {img, name, price, author} = props.course;
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow" style={{width: '18rem', height: '450px'}}>
                <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p><small>By {author}</small></p>
                    <h5>${price}</h5>
                    <div className='style'>
                    <button onClick={() => handleAddCourse(props.course)} className="btn btn-primary ">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>      
    );
};

export default Course;
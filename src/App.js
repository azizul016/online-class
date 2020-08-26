import React, { useState } from 'react';
import './App.css';
import fakeData from './fakeData';
import Course from './component/Course/Course';
import Cart from './component/Cart/Cart';

function App() {
  const [courses, setCourses] = useState(fakeData)
  const [cart, setCart] = useState([])
  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }
  
  const totalPrice = cart.reduce((sum, price) => sum + price.price,0)

  
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const course = cart[i];
  //   total = total + course.price

  // }

  return (
    <div className="container-fluid">
        <h2 className='text-center'>Online Class List</h2>
        <div className="row">
          <div className="col-md-9">
            {
              courses.map(course => <Course key={course.id} handleAddCourse={handleAddCourse} course={course}></Course>)
            }
          </div>
          <div className="col-md-3">
              <h2 className='text-center'>Courses:{cart.length}</h2>
              <h3 className='text-center'>Course Price:${totalPrice}</h3>
              <ul className="list-group">
                {
                cart.map(courses => <Cart courses={courses}></Cart>)
                }
              </ul>
              <div className='text-center mx-3'>
                <button className="btn btn-primary">Checkout All Course</button>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;

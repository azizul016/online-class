import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const  courses = props.courses;
    const {name, price} = courses;
    console.log(courses);
    return (
        <div>
            
            <li className="list-group-item rounded d-flex my-2 shadow justify-content-between">
                <span>{name}</span> <span fontWeight="bold"> ${price}</span>
            </li>
            
        </div>
    );
};

export default Cart;
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div >
            <div className="header">
                <div className="row">
                    <div className="col-md-7 headerStyle">
                        <h2>Your Course To Success</h2>
                        <h4 className="my-3">Build skills with courses, certificates and degrees online from world-className universities and companies</h4>
                        <button className='btn btn-outline-info text-white'>Join for Free</button>
                    </div>
                    <div className="col-md-5">
                        
                    </div>  
                </div>
            </div>

            <nav className="navbar navbar-expand-lg  bg-primary">                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Web Development</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Software Development</a>
                    </li>
                </ul>
                </div>
              <form className='form-inline'>
                 <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" type="text"/>
                 <button className="btn btn-success text-white my-2 my-sm-0" type="submit">Search</button>
              </form>
             </nav>
        </div>
    );
};

export default Header;
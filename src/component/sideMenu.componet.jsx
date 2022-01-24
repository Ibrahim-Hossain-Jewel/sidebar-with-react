import React from 'react';
import { useState } from 'react/cjs/react.development';
import logo from '../assets/logo/webscript.png';

export default function SideMenu(props) {
  const [inactive, setinactive] = useState(false);
  return <div className={`side-menu ${inactive? 'inactive': ''}`}>
    <div className='top-section'>
      <div className='logo'>
        <img src={logo} alt = "location fail"/>
      </div>
      <div className='toggle-menu-btn' onClick={()=> setinactive(!inactive)}>
        {inactive ? 
          <i className="bi bi-arrow-right-square-fill"></i>
           : <i className="bi bi-arrow-left-square-fill"></i>
          }
        
      </div>
      <div className='search-controller'>
        <button className='search-btn'>
          <i className="bi bi-search"></i>
        </button>
        <input type = "text" placeholder='Search' />
      </div>
      <div className='divider'></div>
      <div className='main-menu'>
          <ul>
            <li>
              <a className='menu-item'>
                <div className='menu-icon'>
                  <i className="bi bi-speedometer2"></i>
                </div>
                Dashboard
              </a>
            </li>
            <li>
              <a className='menu-item'>
                <div className='menu-icon'>
                <i className="bi bi-newspaper"></i>
                </div>
                Content
              </a>
              <ul className='sub-menu'>
                <li>
                  <a>Courses</a>
                </li>
                <li>
                  <a>Videos</a>
                </li>
              </ul>
            </li>
            <li>
              <a className='menu-item'>
                <div className='menu-icon'>
                  <i className="bi bi-vector-pen"></i>
                </div>
                Design
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>;
}


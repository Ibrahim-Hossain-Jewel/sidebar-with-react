import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import logo from '../assets/logo/webscript.png';
import User from '../assets/user.jpg'
import MenuItem from './menuItem';

export default function SideMenu(props) {
  const MenuItems = [
    {
      name: 'Dashboard',
      to: '/',
      iconClassName: 'bi bi-speedometer2'
    },
    {
      name: 'Content',
      iconClassName: 'bi bi-newspaper',
      to: '/content',
      subMenus: [
        {name: 'Courses'},
        {name: 'Videos'}
      ]
    },
    {
      name: 'Design',
      to: '/design',
      iconClassName: 'bi bi-vector-pen'
    }
  ]
  const [inactive, setinactive] = useState(false);
  useEffect(()=>{
    document.querySelectorAll("sub-menu").forEach(cl=>
      cl.classList.remove('active'))
  })
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
            {/*
            <li>
              <a className='menu-item'>
                <div className='menu-icon'>
                  <i className="bi bi-speedometer2"></i>
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <MenuItem name = {"Contact"} subMenus = { [
              {name: 'Courses'},
              {name: 'Videos'}
            ]} />
            <li>
              <a className='menu-item'>
                <div className='menu-icon'>
                  <i className="bi bi-vector-pen"></i>
                </div>
                <span>Design</span>
              </a>
            </li>
            */}
            {
              MenuItems.map((item, index)=>(
                <MenuItem 
                  key = {index}
                  name = {item.name}
                  subMenus = {item.subMenus || []}
                  to = {item.to}
                  iconClassName = {item.iconClassName}
                  onClick = {
                    ()=>{
                      if(inactive){
                        setinactive(false)
                      }
                    }
                  }
                />
              ))
            }
          </ul>
      </div>
      
    </div>
    {/*Side-menu footer*/}
    <div className='side-menu-footer'>
      <div className='avatar'>
        <img src = {User} alt='avatar location'/>
      </div>
      <div className='user-info'>
        <h5>Jewel Rana</h5>
        <p>jewel@gmail.com</p>
      </div>
    </div>
  </div>;
}


import React from "react";
import { Link } from "react-router-dom";
import {FaAngleRight } from 'react-icons/fa';
import industries from "../industries/industries.component";
import './dropdown.styles.scss';

class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
      }
      handleClickOutside(){
        this.setState({
          listOpen: false
        })
      }

      toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }

      render(){
        const{list} = this.props
        const{listOpen, headerTitle} = this.state
        return(
          <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className = " dd-header-title " >{headerTitle}</div>
            </div>

            {listOpen && <ul className="dd-list">
             {list.map((item) => (
               <ul className="list-container">
                <li className="dd-list-item" key={item.id} >{item.title} <span className="dropDownRightArrow"> <FaAngleRight /> </span> </li>
               </ul>
              ))}
            </ul>}
          </div>
        )
      }
}
export default Dropdown;

import React from "react";
import { Link } from "react-router-dom";
import collectionItem from "../services-collections/service-collection.component";
import {FaAngleRight } from 'react-icons/fa';
import './dropdown.styles.scss';

class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title,
          allobj: props.superProps
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
          console.log(this.state.allobj)
        const{list} = this.props;
        const{listOpen, headerTitle} = this.state;
        return(
          <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className = " dd-header-title " >{headerTitle}</div>
            </div>

            {listOpen && <ul className="dd-list">
             {list.map((item) => (
               <ul className="list-container" key={item.id}>
                <li className="dd-list-item" key={item.id} > {item.title} <span className="dropDownRightArrow"> <FaAngleRight /> </span> </li>
               </ul>
              ))}
            </ul>}
          </div>
        )
      }
}
export default Dropdown;

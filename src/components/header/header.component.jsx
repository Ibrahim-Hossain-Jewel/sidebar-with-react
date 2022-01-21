import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
import Dropdown from "../dropdown/dropdown.component";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allobj: props,
            location: [
                {
                    id: 0,
                    title: ' Advisory & Consulting',
                    selected: false,
                    key: 'location'
                },
                {
                  id: 1,
                  title: ' Cloud Services',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: ' Contact Centers',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'Customer Experience',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 4,
                  title: 'Data Analytics',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 5,
                  title: 'Data Center',
                  selected: false,
                  key: 'location'
                }
            ]
        };

    }
    render(){
        console.log(this.state.allobj)
        console.log("Your passed props are below!");
        return(
            <div className="header"> 
                <div className="options">
                    <div className="gridContainer">
                        <div className="option">Logo</div>
                        <div className="splitUp">
                            <span className="option dropdownHeader">
                                <Dropdown title = "Solutions" list = {this.state.location} superProps = {this.state.allobj} />
                            </span>
                            <Link to = '/industries' className="option">Industries</Link>
                            <Link to = '/discover' className="option">Discover</Link>
                            <Link to = '/aboutUs' className="option">About Us</Link>
                            <Link to = '/careers' className="option">Careers</Link>
                        </div>
                        <div className="option">Hello world </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Header;
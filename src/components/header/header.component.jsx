import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
import Dropdown from "../dropdown/dropdown.component";

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            location: [
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                  id: 1,
                  title: 'Dublin',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'California',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'Istanbul',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 4,
                  title: 'Izmir',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 5,
                  title: 'Oslo',
                  selected: false,
                  key: 'location'
                }
            ]
        };

    }
    render(){
        return(
            <div className="header"> 
                <div className="options">
                    <div className="pages">
                        <span className="option">
                            <Dropdown title = "Solutions" list = {this.state.location} />
                        </span>
                        <span className="splitUp">
                            <Link to = '/industries' className="option">Industries</Link>
                            <Link to = '/discover' className="option">Discover</Link>
                            <Link to = '/aboutUs' className="option">About Us</Link>
                            <Link to = '/careers' className="option">Careers</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};
export default Header;
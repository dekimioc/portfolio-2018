import React from 'react';
import { Link } from "react-scroll";
import "./Dropdown.css";

class Dropdown extends React.Component {
    render() {
        return (
            <div className="dropdown-container">
                <ul className="dd-list">
                    <Link  spy={true}
                     smooth={true}
                     offset={-70}
                     duration= {500}
                     className="link-navigation-drop" to="main"><li onClick={this.props.hide} className="hb-list-item" >Home</li></Link>
                    <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                     className="link-navigation-drop" to="skillsNavigation"><li onClick={this.props.hide} className="hb-list-item" >Skills</li></Link>
                    <Link  spy={true}
                     smooth={true}
                     offset={-70}
                     duration= {500}
                    className="link-navigation-drop" to="aboutNavigation"><li onClick={this.props.hide} className="hb-list-item" >About Me</li></Link>
                    <Link  spy={true}
                     smooth={true}
                     offset={-70}
                     duration= {500}
                     className="link-navigation-drop" to="projectsNavigation"><li onClick={this.props.hide} className="hb-list-item" >Projects</li></Link>
                    <Link  spy={true}
                     smooth={true}
                     offset={-70}
                     duration= {500}
                     className="link-navigation-drop" to="contact-navigation"><li onClick={this.props.hide} className="hb-list-item" >Contact</li></Link>
                </ul>
            </div>
        )
    }
}

export default Dropdown;
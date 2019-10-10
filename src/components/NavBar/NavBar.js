import React from 'react';
import './NavBar.css';
import DM from '../../images/DM.png';
import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa/index';
import Slide from 'react-reveal/Slide';
import Dropdown from '../Dropdown/Dropdown';

class NavBar extends React.Component {
    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }

    closeModalDrop = () => {
        this.setState({modal: !this.state.modal})
    }



    render() {
        let dropdown = null;
        if(this.state.modal === true) {
            dropdown =  <Dropdown hide={this.closeModalDrop}/>
        } 
        return(
            <Slide top>
            <div className="navBarContainer" id="homeNavigation">
                <img src={DM} className="imageLogo" alt=""/>    
                <ul className="ul-list">
                    <div className="links"  >
                        <Link  spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500} 
                            className="linkNavigation" 
                            to="main"><li className="li-list first" >Home</li></Link>
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="linkNavigation" to="skillsNavigation" ><li  className="li-list second">Skills</li></Link>
                        <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500} className="linkNavigation" to="aboutNavigation" ><li className="li-list third">About Me</li></Link>
                        <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500} className="linkNavigation" to="projectsNavigation"><li className="li-list fourth">Projects</li></Link>
                        <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500} className="linkNavigation" to="contact-navigation" ><li className="li-list five">Contact</li></Link>
                    </div>
                </ul>
                
                <div className="hamburgerWrapper">
                    <div className="hamburgerTitle">
                        <FaBars onClick={this.toggleModal} className="hamburgerStyle"/>
                    </div>
                </div>
               {dropdown}
            </div>
            
            </Slide>
        )
    }
}

export default NavBar;
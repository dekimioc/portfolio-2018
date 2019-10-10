import React from 'react';
import "./AboutMe.css";
import { Link } from "react-scroll";
import Roll from 'react-reveal/Roll';
import me from '../../images/me.png';
import {FaTimesCircle} from 'react-icons/fa/index';
import RubberBand from 'react-reveal/RubberBand';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        
          this.state ={
              moreAboutMe: null
          }
    }

    openMoreAboutMe = () => {
        this.setState({moreAboutMe: true})
    }

    closeMoreAboutMe = () => {
        this.setState({moreAboutMe: false})
    }

    

    render() {
        let moreAboutMe = null;
        if(this.state.moreAboutMe === true) {
            moreAboutMe = (
               
                <RubberBand>
                <div className="more-about-me-container" id="more-about-me-modal">
                <FaTimesCircle onClick={this.closeMoreAboutMe} className="close-more-about-me" />
                <div className="more-about-me-content" >
                <h1 className="name-dejan" >Dejan Miocinovic</h1>
                <div className="image-container-modal">
                    <img className="imageMe" alt="" src={me} />
                    </div>
                    <h1 className="about-title" id="more-about-me-nav">Front End Developer</h1>
                <div className="about-me-description">
                        <p className="about-me-para-des-1">I'm 27 years old, and I love programming, love to write clean codes and solve problems. 
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            I think that websites don't have to be static, I love making pages come to life, and my layouts work on any device,
                            big or small. I know how to create website to run across devices using the latest technologies available. </p>
                        <p className="about-me-para-des-2">I'm especially interested in learning technology, I want to become full stack developer...
                        I mostly like to work in React JS technology...</p>
                        <p className="about-me-para-des-3">Skilled in: HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery, React, Redux, Git, Webpack, Adobe Photoshop...</p>
                </div>
                
            </div>
            </div>

            </RubberBand>
            )
        }
        return (
            <div id="aboutNavigation">
            <div className="AboutContainer" >
                <h1 className="text-about">Do you know who I am?</h1>
                <p className="about-subtitle">A couple of things about me</p>
                <div className="section-for-text">
                <Roll left>
                    <div className="leftSide">
                        <div>
                            <p>My main goal as Front End Developer is to understand and implement client needs. Constantly looking for new challenges!</p>
                        </div>
                    </div>
                    </Roll>
                    <Roll right>
                    <div className="rightSide">
                        <div>
                            <p>I am a Front-end Developer and I am specialized im HTML5, CSS3, JavaScript. Dedication and passion are main characteristics that describe me the best. This characteristic can also describe my willing to constantly improve my knowledge and skills.
                                I build dinamic web apps in ReactJS framework.</p>
                        </div>
                    </div>
                    </Roll>
                    <Roll bottom>
                    <div className="button-container">
                      <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  to="aboutNavigation"><button onClick={this.openMoreAboutMe} disabled={this.state.moreAboutMe === true} className="aboutButton">More about me</button></Link>
                    </div>
                    </Roll>
                    {moreAboutMe}
                </div>
            </div>
               
            </div>
        )
    }    
}

export default AboutMe;
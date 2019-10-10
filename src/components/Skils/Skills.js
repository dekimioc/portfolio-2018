import React from 'react';
import "./Skills.css";
import html from "../../images/html.png";
import iconOfCss from '../../images/css.png';
import bootstrap from '../../images/bootstrap.png';
import javaScript from '../../images/javaScript.png';
import sass from '../../images/sass.png';
import iconReact from '../../images/react.png';
import jQuery from '../../images/jquery.png';
import redux from '../../images/redux.png';
import iconGit from '../../images/gitIcon.png';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';



const Skills = () => {
    return (
        <div className="outerDiv" id="skillsNavigation">
            <div className="" >
                <h1 className="skills-header">What do I know?</h1>
                <p className="skills-subheader">I'm skilled in this technologies</p>
            </div>
            
            <div className="image-container">
                <Slide left>
                    <div className="contHTML">
                        <img className="html" alt="" src={html} />
                        <h2 className="skill-header animated pulse">HTML</h2>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div className="contHTML">
                        <img className="html" alt="" src={iconOfCss} />
                        <h2 className="skill-header">CSS</h2>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="contHTML">
                        <img className="html" alt="" src={sass} />
                        <h2 className="skill-header">SCSS</h2>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="contHTML">
                        <img className="html" alt="" src={bootstrap} />
                        <h2 className="skill-header">Bootstrap</h2>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div className="contHTML">
                        <img className="html" alt="" src={javaScript} />
                        <h2 className="skill-header">JavaScript</h2>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="contHTML">
                        <img className="html" alt="" src={jQuery} />
                        <h2 className="skill-header">jQuery</h2>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="contHTML">
                        <img className="html" alt="" src={iconReact} />
                        <h2 className="skill-header">React</h2>
                    </div></Slide>

                    <Slide bottom>
                    <div className="contHTML">
                        <img className="html" alt="" src={redux} />
                        <h2 className="skill-header">Redux</h2>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="contHTML">
                        <img className="html" alt="" src={iconGit} />
                        <h2 className="skill-header">Git</h2>
                    </div>
                    </Slide>
                
                    
                    </div>
                <div className="skills-container">
                    <ul className="ul-list-skills">
                        <li className="list-skills">
                        <Flip right>
                            <span className="list-span"></span>
                            <h3 className="h3-skills">HTML</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                            <Flip left>
                                <span className="list-span-css"></span>
                                <h3 className="h3-skills">CSS</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                            <Flip right>
                                <span className="list-span-sass"></span>
                                <h3 className="h3-skills">SCSS</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                            <Flip left>
                            <span className="list-span-bootstrap"></span>
                            <h3 className="h3-skills">Bootstrap</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                        <Flip right>
                            <span className="list-span-javascript"></span>
                            <h3 className="h3-skills">JavaScript</h3>
                            </Flip>
                        </li>
                        
                        <li className="list-skills">
                        <Flip left>
                            <span className="list-span-jquery"></span>
                            <h3 className="h3-skills">jQuery</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                        <Flip right>
                            <span className="list-span-react"></span>
                            <h3 className="h3-skills">React</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                        <Flip left>
                            <span className="list-span-redux"></span>
                            <h3 className="h3-skills">Redux</h3>
                            </Flip>
                        </li>
                        <li className="list-skills">
                        <Flip right>
                            <span className="list-span-git"></span>
                            <h3 className="h3-skills">Git</h3>
                            </Flip>
                        </li>
                    </ul>
                </div>
            </div>
    
    )
}

export default Skills;
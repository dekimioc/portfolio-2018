import React from 'react';
import "./MainPage.css";
import MainPicture from '../../images/banner_image.png';
import {FaAngleUp} from 'react-icons/fa/index';
import Slide from 'react-reveal/Slide';
import { HashLink as Link } from 'react-router-hash-link';


class MainPage extends React.Component {
    render() {
        return (
          <Slide top>
          <div className="mainHeaderContainer" id="main" >
            <div>
              <Link smooth to="#main">
                <FaAngleUp className="scroll-up" />
              </Link>
          </div>
          <div className="main-picture-back">
            <img className="image-main" alt="" src={MainPicture}/>
          </div>
            <div className="backgroundMain">
              <h1 className="mainDejan">Hello, I'm <strong className="colorName">Dejan Miocinovic</strong>.
              <br />I'm front-end web developer.</h1>
            </div>
            
          </div>
          </Slide>
        )
    }
}


export default MainPage;
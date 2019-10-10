import React from 'react';
import "./Footer.css";
import {FaLinkedin, FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';

const Footer = () => {
    return (
        <div id="footer-nav" className="footer-container">
            <div className="footer-content">
            <Roll left>
            <div className="mail-content">
                <a href="mailto:dekimioc@gmail.com"><h3 className="footer-mail">dekimioc@gmail.com</h3></a>
            </div>
            </Roll>
            <Roll right>
                <h3 className="footer-number">+381 65 991 27 06</h3>
                </Roll>
                <div>
                    <h1 className="footer-social">My social networks</h1>
                    <div>
                        <LightSpeed left cascade>
                                <a href="https://www.linkedin.com/in/dejan-miocinovic-747641171/" target="_blank" rel="noopener noreferrer" className="social"><FaLinkedin/></a>
                                <a href="https://www.facebook.com/dejan.miocinovic.71" target="_blank" rel="noopener noreferrer" className="social"><FaFacebook /></a>
                            </LightSpeed>
                            <LightSpeed right cascade>
                                <a href="https://github.com/dekimioc" target="_blank" rel="noopener noreferrer" className="social"><FaGithub /></a>
                                <a href="https://www.instagram.com/_mioch_/" target="_blank" rel="noopener noreferrer" className="social"><FaInstagram /></a>
                            </LightSpeed>
                       
                    </div>
                </div>
                
                </div>
                <h2 className="footer-text-bottom">&copy; 2019 Dejan Miocinovic</h2>
        </div>
    )
};

export default Footer;
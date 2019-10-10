import React from 'react';
import './PortfolioModal.css';
import { FaTimes, FaArrowRight, FaArrowLeft } from 'react-icons/fa/index';
import ScrollToTop from 'react-router-scroll-top'

const PortfolioModal = (props) => {
    return (
        
        <div className="portfolioModal" id="modal-scroll-portfolio">    
                <FaArrowLeft onClick={props.scrollLeft} className="modal-arrow-left" />
                <FaArrowRight onClick={props.scrollRight} className="modal-arrow-right" />
                <FaTimes   onClick={props.hide} className="icon-close-modal"/>
                
            <div className="modal-image-container">
                <ScrollToTop>
                    <img className="modal-image-size" src={props.imageId} alt=""/>
                    </ScrollToTop>
            </div>
            
            
           
            <div className="modal-text-section">
                <h3><span className="modal-span">Title: </span>{props.title}</h3>
                <p><span className="modal-span">Skills: </span>{props.skills}</p>
                <a className="modal-link-color" href={props.link} target="blank"><p className="paragraph-span"><span className="modal-span">Link: </span>{props.link}</p></a>
                <p><span className="modal-span">Description: </span>{props.description}</p>
            </div>
            
        </div>
        
    )
}

export default PortfolioModal;
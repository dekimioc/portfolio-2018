import React from 'react';
import "./Projects.css";
import diceBig from '../../images/DiceBig.png';
import burgerBig from '../../images/burgerBig.png';
import hexaBig from '../../images/hexaBig.png';
import miamiBig from '../../images/miamiBig.png';
import thunderBig from '../../images/thunderBig.png';
import phototimeBig from '../../images/phototimeBig.png';
import surferBig from '../../images/surferBig.png';
import choreDoorBig from '../../images/choreDoorBig.png';
import videoSearchBig from '../../images/videoSearchBig.png';
import { FaPlus } from 'react-icons/fa/index';
import Slide from 'react-reveal/Slide';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import { Link } from "react-scroll";
import burgerScroll from '../../images/burgerScroll.png';
import surferScroll from '../../images/surfer-scroll.jpg';
import hexaScroll from '../../images/hexa-scroll.jpg';
import miamiScroll from '../../images/miami-scroll.jpg';
import thunderScroll from '../../images/thunder-scroll.jpg';
import diceScroll from '../../images/diceScroll.jpg';
import choreScroll from '../../images/chorDoorScroll.png';
import phototimeScroll from '../../images/phototime-scroll.jpg';
import videoScroll from '../../images/videoSearchScroll.jpg';

class Projects extends React.Component {
    state = {
        modalOpen: false,
        showedCompoment: null
   }

    openModalHandler = () => {
        this.setState({modalOpen: true});
    }

    selectElement = () => {
        this.openModalHandler();
        
    }

    burgerShow = () => {
        this.setState({showedCompoment: 1})
    }

    surferShow = () => {
        this.setState({showedCompoment: 2})
    }

    hexaShow = () => {
        this.setState({showedCompoment: 3})
    }

    miamiShow = () => {
        this.setState({showedCompoment: 4})
    }

    thunderShow = () => {
        this.setState({showedCompoment: 5})
    }

    phototimeShow = () => {
        this.setState({showedCompoment: 6})
    }

    diceShow = () => {
        this.setState({showedCompoment: 7})
    }

    chorShow = () => {
        this.setState({showedCompoment: 8})
    }
    
    videoShow = () => {
        this.setState({showedCompoment: 9})
    }

    scrollLeft = () => {
        if(this.state.modalOpen === true) {
            this.setState(prevState => ({
                showedCompoment: prevState.showedCompoment - 1
            }))
            if(this.state.showedCompoment === 1) {
                this.setState({showedCompoment: 9})
            }
        }
        
    }
    scrollRight = () => {
        if(this.state.modalOpen === true) {
            this.setState(prevState => ({
                showedCompoment: prevState.showedCompoment + 1
            }))
            if(this.state.showedCompoment === 9) {
                this.setState({showedCompoment: 1})
            }
        }
        
    }

    

    closeModalHandler = () => {
        this.setState({modalOpen: false});
    }

    render() {
        let modalPortfolio = null;
        let modalContent = null;
        let list = [
            {   
                id: 1,
                image: burgerScroll,
                title: "Burger Builder",
                skills: "HTML, CSS, React, Redux",
                link: "https://github.com/dekimioc/burger",
                description: "App for ordering burgers, I used React and Redux in this app... Authenticated with firebase. Full responsive work on all devices"
            },
             {
                id: 2,
                image: surferScroll,
                title: "Surfer",
                skills: "HTML, CSS, React",
                link: "https://github.com/dekimioc/Surfer",
                description: "Random site for buying surfers equipment, converted from PSD file. Full responsive work on all devices"
            },
            {   
                id: 3,
                image: hexaScroll,
                title: "Hexa",
                skills: "HTML, CSS, SCSS",
                link: "https://github.com/dekimioc/PSD-to-HTML",
                description: "Random site converted from PSD file. Full responsive work on all devices"
            },
             {  
                id: 4,
                image: miamiScroll,
                title: "Miami",
                skills: "HTML, CSS, SCSS",
                link: "https://github.com/dekimioc/miamiTemplate",
                description: "Site about Miami, full responsive, work on all devices."
            },
             {
                id: 5,
                image: thunderScroll,
                title: "Thunder",
                skills: "HTML, CSS, SCSS",
                link: "https://github.com/dekimioc/Thunder",
                description: "Used sliders in heading. Full responsive work on all devices"
            },
             {
                id: 6,
                image: phototimeScroll,
                title: "Photo Time",
                skills: "HTML, CSS, React",
                link: "https://github.com/dekimioc/Phototime",
                description: "Converted from PSD. Full responsive work on all devices"
            },
             {
                id: 7,
                image: diceScroll,
                title: "Dice Game",
                skills: "HTML, CSS, JavaScript",
                link: "https://github.com/dekimioc/Dice-game",
                description: "Game for two players maded in pure JavaScript. Full responsive work on all devices"
            },
             {
                id: 8,
                image: choreScroll,
                title: "Chore Door",
                skills: "HTML, CSS, JavaScript",
                link: "https://github.com/dekimioc/Chore-Door",
                description: "Game where you can choose between three dors, you must to open all dors before you find robot. Full responsive work on all devices"
            },
             {
                id: 9,
                image: videoScroll,
                title: "Video Search",
                skills: "HTML, CSS, React",
                link: "https://github.com/dekimioc/search-video",
                description: "Web app for searching for YouTube videos. Full responsive work on all devices"
            }
        ];

        switch(this.state.showedCompoment) {
            case 1: 
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[0].image}
                            title={list[0].title}
                            skills={list[0].skills}
                            link={list[0].link}
                            description={list[0].description} />
                    </Slide>
                    )
                    break;
            case 2:
                    modalContent = (
                        <Slide left>
                            <PortfolioModal 
                                scrollLeft={this.scrollLeft}
                                scrollRight={this.scrollRight}
                                hide={this.closeModalHandler}
                                imageId={list[1].image}
                                title={list[1].title}
                                skills={list[1].skills}
                                link={list[1].link}
                                description={list[1].description} />
                        </Slide>
                    )
                break;
            case 3: 
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[2].image}
                            title={list[2].title}
                            skills={list[2].skills}
                            link={list[2].link}
                            description={list[2].description} />
                    </Slide>)
                break;
            case 4:
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[3].image}
                            title={list[3].title}
                            skills={list[3].skills}
                            link={list[3].link}
                            description={list[3].description} />
                    </Slide>
                    )
                break;
            case 5: 
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[4].image}
                            title={list[4].title}
                            skills={list[4].skills}
                            link={list[4].link}
                            description={list[4].description} />
                    </Slide>
                    )
                break;
            case 6:
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[5].image}
                            title={list[5].title}
                            skills={list[5].skills}
                            link={list[5].link}
                            description={list[5].description} />
                    </Slide>
                    )
                break;
            case 7: 
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[6].image}
                            title={list[6].title}
                            skills={list[6].skills}
                            link={list[6].link}
                            description={list[6].description} />
                    </Slide>
                    )
                break;
            case 8:
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[7].image}
                            title={list[7].title}
                            skills={list[7].skills}
                            link={list[7].link}
                            description={list[7].description} />
                    </Slide>
                    )
                break;
            case 9:
                modalContent = (
                    <Slide left>
                        <PortfolioModal 
                            scrollLeft={this.scrollLeft}
                            scrollRight={this.scrollRight}
                            hide={this.closeModalHandler}
                            imageId={list[8].image}
                            title={list[8].title}
                            skills={list[8].skills}
                            link={list[8].link}
                            description={list[8].description}    />
                    </Slide>
                    )
                break;
                default:   
                    modalContent = null;
        }
        
        if(!this.state.modalOpen) {
            modalPortfolio = null;
        } else {
            modalPortfolio = ( 
                    <Slide left>
                        {modalContent}
                    </Slide> 
        )
    }

        return (
            <div className="background" id="projectsNavigation"> 
                    <div className="project-main-page">
                        <h1 className="projects-header">Have you seen my works?</h1>
                        <p className="projects-subheader">Projects I've been working on</p>
                    </div>
                    <div className="modal-container" id="modal">
                        {modalPortfolio}
                    </div>
                    
                <div className="outer-container" >
                <Slide left >
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={burgerBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.burgerShow}><FaPlus id="0" onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Burger Builder</h3>
                            <p className="project-caption">HTML, CSS, React, Redux</p>
                        </div>
                    </div>
                    </Slide>
                <Slide top>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={surferBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.surferShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Surfer</h3>
                            <p className="project-caption">HTML, CSS, React</p>
                        </div>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={hexaBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.hexaShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Hexa</h3>
                            <p className="project-caption">HTML, CSS, SASS</p>
                        </div>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={miamiBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.miamiShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Miami</h3>
                            <p className="project-caption">HTML, CSS, SASS</p>
                        </div>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={thunderBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.thunderShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Thunder</h3>
                            <p className="project-caption">HTML, CSS, SASS</p>
                        </div>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={phototimeBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.phototimeShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Phototime</h3>
                            <p className="project-caption">HTML, CSS, React</p>
                        </div>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                        <img className="nature-image" alt="" src={diceBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.diceShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Dice Game</h3>
                            <p className="project-caption">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                            <img className="nature-image" alt="" src={choreDoorBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.chorShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Chore Door game</h3>
                            <p className="project-caption">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    </Slide>

                    <Slide right>
                    <div className="imageResponsive">
                        <div className="thumb-overlay">
                            <img className="nature-image" alt="" src={videoSearchBig}/>
                            <div className="mask">
                            </div>
                            <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}  className="link-modal" to="modal-scroll-portfolio" onClick={this.videoShow}><FaPlus onClick={this.selectElement} className="plus-icon"></FaPlus></Link>
                            <h3 className="project-header">Video Search App</h3>
                            <p className="project-caption">React, HTML, CSS</p>
                        </div>
                    </div>
                    </Slide>
                   
                </div>
                <div className="gitHub-link">
                    <Slide right>
                    <h1>Visit my <a href="https://github.com/dekimioc" target="_blank" rel="noopener noreferrer">GitHub</a> profile</h1>
                    </Slide>
                </div>
            
            </div>
       )
    }
}

export default Projects;
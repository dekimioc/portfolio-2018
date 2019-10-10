import React from 'react';
import "./Contact.css";
import Zoom from 'react-reveal/Zoom';
import * as emailjs from 'emailjs-com';
import { Link } from "react-scroll";



class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        emailSent: false,
        formIsValid: false,
        errors: {
            nameError: false,
            emailError: false,
            subjectError: false,
            messageError: false,
        },
        formValid: {
            nameForm: false,
            emailForm: false,
            subjectForm: false,
            messageForm: false
        },
        newMail: null
    }

    newMail = () => {
        this.setState({emailSent: null});
    }

    handleName = (e) => {

        this.setState({name: e.target.value});
        if(this.state.name.length < 3) {
            this.setState({nameForm: false, nameError: "Must be more than 3 characters"})
        } else {
            this.setState({nameForm: true, nameError: false})
        }
        this.validateForm();
        console.log(this.state)
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        
        if(re.test(this.state.email)) {
            this.setState({emailForm: true, emailError: false});
            
        } else {
            this.setState({emailForm: false, emailError: "Email is not valid"});
            
        }
        this.validateForm();
        console.log(this.state)
    }

    handleMessage = (e) => {
        this.setState({message: e.target.value})

        if(this.state.message.length <= 10) {
            this.setState({messageForm: false, messageError: "Must be more than 10 characters"});
        } else {
            this.setState({messageForm: true, messageError: false});
        }
        this.validateForm();
    }

    handleSubject = (e) => {
        
        this.setState({subject: e.target.value})
       
        if(this.state.subject.length < 3) {
            this.setState({subjectForm: false, subjectError: "Must be more than 3 characters"})
        } else {
            this.setState({subjectForm: true, subjectError: false})
        }
        this.validateForm();
    }


    validateForm = () => {
        if(this.state.nameForm && this.state.emailForm && this.state.subjectForm && this.state.messageForm) {
            this.setState({formIsValid: true})
            return true; 
        } else {
            this.setState({formIsValid: false})
            return false
        }
        
    }

   
    sendEmail = () => {
        let service_id = 'gmail';
        let template_id = 'template_4U61D2iw';
        

        let template_params = {
            "subject": this.state.subject,
            "from_name": this.state.name,
            "from_email": this.state.email,
            "message_html": this.state.message
        }
        
        emailjs.send(service_id,template_id,template_params, "user_2fyzgD8SZvAcuMplmfB9r");

        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            emailSent: true,
            formIsValid: false
        })
    }

    

    render() {
        let messageSucessful = null; 
        if(this.state.emailSent === true) {
            messageSucessful = (
                <Zoom right>
                <div className="message-succesfull-container">
                    <p className="message-succesfull">Email sent, I will contact you soon!</p>
                    <Link 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                        to="contact-form" >
                        <button onClick={this.newMail} className="send-another-mail">Send another mail</button>
                    </Link>
                </div>
                </Zoom>
            )
        } else {
            messageSucessful = null;
        }
        return(
            <div className="contact-container" id="contact-navigation">
            <h1 className="contact-header">Contact me</h1>
            <p className="contact-subheader">You can send me an email</p>
            <div className="form-content">
                <form 
                    onSubmit={e => e.preventDefault()}
                    id="contact-form" 
                    name="contact-form" 
                    className="form-div"
                    method="post"
                    action='' >
                <Zoom left cascade>
                    <div className="input-element-wrapper">
                        <input 
                            required="required"
                            onChange={this.handleName} 
                            name="name" 
                            type="text" 
                            className="input name" 
                            placeholder="* Your name"
                            value={this.state.name}
                            />
                            <p>{this.state.errors.name}</p>
                            <div>
                            <p>{this.state.nameError}</p>
                            </div>
                    </div>
                    <div className="input-element-wrapper">
                        <input 
                            required="required"
                            onChange={this.handleEmail}
                            placeholder="* Your email"
                            name="email" 
                            type="email" 
                            className="input email" 
                            value={this.state.email} 
                            />
                            <p>{this.state.emailError}</p>
                    </div>
                    <div className="input-element-wrapper">
                        <input 
                            value={this.state.subject} 
                            onChange={this.handleSubject}
                           
                            name="subject" 
                            type="text" 
                            className="input subject" 
                            placeholder="* Subject"
                            />
                            <p>{this.state.subjectError}</p>
                    </div>
                    <div className="input-element-wrapper message-wrapper">
                        <textarea 
                            value={this.state.message} 
                            onChange={this.handleMessage}
                            required="required" 
                            name="message" 
                            type="text" 
                            className="input message" 
                            placeholder="* Message"
                            />
                            <p>{this.state.messageError}</p>
                    </div>
                    <div className="button-element-wrapper">
                        <Link spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500} 
                            to="footer-nav">
                            <button
                            className="input-button"
                            type="submit"
                            onClick={this.sendEmail}
                            disabled={this.state.emailSent || this.state.formIsValid === false}
                            >Send message</button>
                        </Link>
                    </div>
                    </Zoom>
                </form>
                <div>
                    {messageSucessful}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
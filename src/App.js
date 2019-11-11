import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import Skills from './components/Skils/Skills';
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

var history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Route path="/" exact component={NavBar}></Route>
                    <Route path="/" exact component={MainPage}></Route>
                    <Route path="/" exact component={Skills}></Route>
                    <Route path="/" exact component={AboutMe}></Route>
                    <Route path="/" exact component={Projects}></Route>
                    <Route path="/" exact component={Contact}></Route>
                    <Route path="/" exact component={Footer}></Route>
                </div>
            </Router>
        )
    }
};

export default App;

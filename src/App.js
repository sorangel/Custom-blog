import React, {Component} from 'react';
import './App.css';
import Home from "./Containers/Home";
import Header from "./Componentes/Header";
import Hero from "./Componentes/Hero";
import {BrowserRouter as Router,Route} from "react-router-dom";
import ContactUS from "./Containers/ContactUS";
import Post from "./Containers/Post";


export default class App extends Component{
    render() {
        return (
            <Router>
            <div className="App">
                <Header />
                <Hero />
                <Route path="/" exact component={Home}/>
                <Route path="/contact-us" component={ContactUS} />
                <Route path="/post/:slug" component={Post} />


            </div>
            </Router>
        );
    }

}

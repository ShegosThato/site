import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/thato.jpg';

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} />
            <h1><Link smooth to="/#start" className="h1_links">Thato Mashego</Link></h1>
            <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"> cjmashego66@gmail.com </p>
            <ul className="sidebar-nav">
                <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                <li className="sidebar-nav-items"><Link smooth to="/#skills" className="links">Skills</Link></li>
                <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
            </ul>

            <div className="flip-card-back">
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/thato-mashego-ab29b014b" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://github.com/ShegosThato" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://twitter.com/shegosthato" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/shegos_thato/" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="mailto:cjmashego66@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/profile.php?id=100004244502791" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar

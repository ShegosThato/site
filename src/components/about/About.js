import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function About() {
    return (
        <div className={classes.box} id="about">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <span className={classes.head}>ABOUT ME</span>
                <h2 className={classes.heading}>Who Am I?</h2>
                <div className={classes.About}>
                    <p> I am a self-taught programmer from Brakpan, Ekurhuleni who loves fidgeting with web and mobile technologies. Grew up on Windows but ever since I discovered Linux, I never turned back.</p>
                    <p className={classes.br}>I'm fascinated by how things work internally, I read a lot and often curious about new discoveries, ideas or just a new way of doing something. </p>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default About;
import React, { Component } from 'react'
import classes from './skills.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Skills() {
    return (
        <div className={classes.box} id="skills">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <span className={classes.head}>WHAT I DO?</span>
                <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
                <div className={classes.skills}>
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                        <div className={classes.web}>
                            <h3>Universal skills</h3>
                            <p>I can use Windows, MacOS and Debian based Linux.<br /> GIMP, Inkscape, MS Office, Git and Github. </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                        <div className={classes.app}>
                            <h3>Web Develpoment</h3>
                            <p>I can build websites using HTML, CSS, Javascript, React, Django and the Django REST framework.<br /> I have also good grasp on Node, SQL(MySQL/PostgreSQL) and NoSQL(MongoDB)</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                        <div className={classes.other}>
                            <h3>APP Development</h3>
                            <p>I have beginner knowledge in React Native and Python Kivy framework and Android Studio.</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Skills;
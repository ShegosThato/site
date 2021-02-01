import React, { Component } from 'react';
import classes from './education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

function Education() {
    return (
        <div className={classes.box} id="education">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible={true}>
                <span className={classes.head}>EDUCATION</span>
                <section className={classes.container}>
                    <div className={classes.container_content}>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                <FaSchool />
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >HTS Springs <span>2009-2014</span></h2>
                                                <p>My high school was a time of valuable life lessons and joy. Obtained my National Senior Certificate and was ready to conquer the world </p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                                        <article>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                <MdWork />
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >First Job <span>2016-2017</span></h2>
                                                <p>I was a Sales Consultant at a financial startup called Circle Finance from Edenvale.</p>
                                            </div>
                                            <br />
                                            <div className={classes.label}>
                                                <h2 >Work  <span>2017-2017</span></h2>
                                                <p>Clerk at Keith Ho BetXChange, I was loved by customers because of my fast typing skills.</p>
                                            </div>
                                            <br />
                                            <div className={classes.label}>
                                                <h2 >Volunteering  <span>2019-2019</span></h2>
                                                <p>Crystal Printing Designs is a printing company that I helped design and develop a website for.</p>
                                            </div>
                                            <br />
                                            <div className={classes.label}>
                                                <h2 >Volunteering  <span>2019-2020</span></h2>
                                                <p>I helped a gym startup called NTM Fitness Club migrate digitally. I was a full stack developer that designed, developed and deployed the website.</p>
                                            </div>
                                            <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                        </article>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    )
}

export default Education

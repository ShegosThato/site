import React from 'react';
import classes from './Greeter.module.css';
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import { DiBootstrap, DiHtml5, DiCss3, DiJavascript, DiFirebase, DiPostgresql, DiReact, DiDjango, DiGit, DiHeroku, DiMongodb } from 'react-icons/di';
import dampeace from '../images/dampeace.jpg';

function Greeter() {
    return (
        <div className="" id="start">
            <div className="card bg-dark text-white text-center">
                <img src={dampeace} class="card-img" className={classes.dampeace} alt="Thato image" />
                <div className="card-img-overlay">
                    <div className="card-body">
                        <h4 className={classes.standout}>Hi, there</h4>
                        <h2 className={classes.standout}>I'm Thato Mashego</h2>
                    </div>
                    <div className="card-body">
                        <h4 className={classes.jobtitle}>Software developer</h4>
                        <h4 className={classes.skillicons}><DiBootstrap /> <DiHtml5 /> <DiCss3 /> <DiJavascript /> <DiReact /> <DiFirebase /> <DiDjango /> <DiPostgresql /> <DiMongodb /> <DiGit /> <DiHeroku /></h4>
                    </div>
                    <a href="https://drive.google.com/file/d/1_N2geRww1KyLfdAgXGbJ8iNrksWl_K4B/view?usp=sharing" rel="opener noreferrer" target="_blank" className="btn btn-light btn-sm mr-2">View CV <FaArrowCircleDown /></a>
                    <a href="https://github.com/ShegosThato" rel="opener noreferrer" target="_blank" className="btn btn-light btn-sm ml-2">Projects <GoProject /></a>

                </div>
            </div>
        </div>
    )
}

export default Greeter;

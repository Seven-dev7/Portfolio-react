import React, { Component } from 'react';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {

    render() {
        return(
            <div className="backgroundcolor">
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{height: '300px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em',}}> Bendifallah Oussama</h2>
                        <h4 style={{color: 'grey'}}>Web Developper</h4>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5> Address : </h5>
                        <p>26 rue de France, 93000 Bobigny</p>
                        <h5> Phone : </h5>
                        <p> 06-11-22-33-44</p>
                        <h5> Email : </h5>
                        <p> ouss@yopmail.Com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2 style={{marginTop: '20px', marginLeft: '40%', justifyContent: 'center'}}>Education</h2>
                        <Education
                            startYear="Avril 2019"
                            endYear="Juin 2019"
                            schoolName="The Hacking Project"
                            schoolDescription="Bootcamp Ruby On Rails"
                        />
                        <Education
                            startYear={2010}
                            endYear={2013}
                            schoolName="Institut de Formation Infirmier"
                            schoolDescription="Ecole d'infirmier au sein du groupe APHP"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2 style={{marginTop: '20px', marginLeft: '40%', justifyContent: 'center'}}>Experiences</h2>
                        <Experience 
                            startYear="Juin 2019"
                            endYear="Aout 2019"
                            jobName="Gracie Barra Paris"
                            jobDescription="Refonte global du site, avec ajout d'un systeme d'utilisateur et de paiement en lignes des cotisations abonnés"
                        />
                        <Experience 
                            startYear="Septembre 2019"
                            endYear="Decembre 2019"
                            jobName="Top Educs Corporation"
                            jobDescription="Refonte global du site, avec création d'une application de gestion de ses collabrateurs afin de pouvoir faciliter les actions de dispatchement et de comptabilitées"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2 style={{marginTop: '20px', marginLeft: '40%', justifyContent: 'center'}}>Skills</h2>

                        <Skills
                            skill="HTML/CSS"
                            progress={70}
                        />
                        <Skills
                            skill="Ruby"
                            progress={60}
                        />
                        <Skills
                            skill="Ruby on Rails"
                            progress={60}
                        />
                        <Skills
                            skill="Javascript"
                            progress={40}
                        />
                        <Skills
                            skill="ReactJS"
                            progress={30}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default Resume;
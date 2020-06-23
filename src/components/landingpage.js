import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {

    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://faceyourmanga.com/mangatars/0/268/268870/large_304042.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developper</h1>

                            <hr />

                            <p>
                                HTML/CSS | BOOTSTRAP | RUBY | RUBY ON RAILS | JAVASCRIPT | REACT | POSTGRESQL
                            </p>
                            <div className="social-links">
                                        {/* LinkedIn */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                        {/* Github */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                        {/* Twitter */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-twitter-square" aria-hidden="true" />
                                    </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
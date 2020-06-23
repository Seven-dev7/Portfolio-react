import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {

    render() {
        return(
            <div>
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
                        Right side
                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default Resume;
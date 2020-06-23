import React, {Component} from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'

class Skills extends Component {

    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{display: 'flex'}}>
                            {this.props.skill}
                        </div>
                    </Cell>
                    <Cell col={8}>
                        <div>
                            <ProgressBar 
                                style={{marginLeft: '10%',width: '75%'}}
                                progress={this.props.progress}
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;
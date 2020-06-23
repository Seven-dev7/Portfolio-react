import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', marginRight: '30px'}}>
                        <CardTitle style={{color: 'black', height: '276px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> Productions </Button>
                            <Button colored> GitHub </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', marginRight: '30px'}}>
                        <CardTitle style={{color: 'black', height: '276px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> Productions </Button>
                            <Button colored> GitHub </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', marginRight: '30px'}}>
                        <CardTitle style={{color: 'black', height: '276px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> Productions </Button>
                            <Button colored> GitHub </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is Ruby on Rails</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is Bootstrap</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs backgroundcolor">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React </Tab>
                    <Tab>Ruby on Rails </Tab>
                    <Tab>Bootstrap </Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}



export default Projects;
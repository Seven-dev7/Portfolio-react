import React, { Component } from 'react';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {


  render() {
    return(
            <div className="demo-big-content">
                <Layout>
                  <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> Portfolio</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'purple'}} to="/"> Portfolio</Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
          )
  }
}

export default App;

import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Components/Main'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
    <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>My Portfolio</Link>} scroll>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
            <Main />
            <div className="page-content" />
          </Content>
      </Layout>
  </div>
    )
  }
}

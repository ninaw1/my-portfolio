import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Avatar from '../../assets/Snapseed.JPG'

class LandingPage extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img 
              src={Avatar}
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Visual Designer</h1>
              <hr />
              <p>
                HTML/CSS | React | Bootstrap | JavaScript | NodeJS | Adobe Photoshop | Adobe Illustrator
              </p>
              <div className='social-links'>
              
                {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/nina-wang-16b759179/' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* GitHub */}
                <a href='https://github.com/ninaw1' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

              </div>
            </div>
          </Cell> 
        </Grid>
      </div>
    )
  }
}

export default LandingPage
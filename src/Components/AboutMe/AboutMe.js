import React, { Component } from 'react'
import Photo from '../../assets/aboutme.jpg'

class AboutMe extends Component {
  render() {
    return(
      <div>
        <div className="card mb-3" styles="max-width: 540px">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Photo} className="card-img" alt="aboutme" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">A Little Bit About Nina</h2>
                <br />
                <p className="card-text">Nina Wang is a graduate from the University of California, Irvine, majoring in Quantitative Economics. She has recently completed a Full Stack Development Bootcamp Program, recieving her certification at the UCI Continuing Education University. Her background focuses in visual design, account management, finances, and project planning. Nina is fueled by her passion for understanding the nuances of the visual design field. After working for about a year in the financial field, she decided to chase her passion in the design field and take a career change. Pursuing knowledge in Web Development allowed for her to have a deeper understanding in visual design, and discover new passions to pursue. She considers herself a 'forever student', eager to build on her academic foundations, and stay in tune with latest technologies in web development.</p>
                <br />
                <p className='card-text'>She also specializes in the art field, priding herself in having an illustration background, allowing for her to have a deep understanding in the visual field. Her hunger for knowledge and determination to turn information into action has contributed to her completion of her recent bootcamp. She believes that mindfulness in the workplace is the key to sucess. She has practiced improving productivity in a team by implementing strategic project management methods. Nina is always interested in challenges, and believes in hard-work accomplishing any challenge. Be sure to check out her front-end portfolio and art portfolio projects! Reach out to ninaw1@uci.edu to connect!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AboutMe
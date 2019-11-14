import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from '../Education'
import Experience from '../Experience'
import Skills from '../Skills'
import Avatar from '../../assets/avatar.JPG'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Avatar}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Nina Wang</h2>
            <h4 style={{color: 'grey'}}>Front-End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Detail-oriented professional with experience, and proven knowledge in design, conflict resolution, management, and workflow planning. Aiming to leverage my skills to successfiully fill the Visual Design influential role at your company.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>479 San Leon, Irvine, CA 92606</p>
            <h5>Phone</h5>
            <p>(626) 632-1717</p>
            <h5>Email</h5>
            <p>ninaw1@uci.edu</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2017}
              schoolName="University of California, Irvine"
              schoolDescription="Quantitative Economics"
               />
               <Education
                 startYear={2019}
                 endYear={2019}
                 schoolName='University of California, Irvine Continued Education'
                 schoolDescription="Full Stack Development Bootcamp"
                  />
                <hr style={{borderTop: '3px solid #833fb2'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName='Digital Branding Specialist'
              jobDescription='Designed custom menus and promotional event flyers for the company. Prepared and reviewed daily operational reports and schedules to ensure accuracy and efficiency. Worked with daily operational financial duties, monitoring sales, and managed overall production.'
              />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName='Associate Financial Representative'
                jobDescription="Utilized company software to create reports and financial presentations for clients. Completed a minimum of five client reports a day, using portfolio illustration softwares. Analyzed financial information obtained from clients to determine strategies for meeting clients' financial objectives." 
                />
              <Experience
                startYear={2017}
                endYear={2017}
                jobName='Account Executive'
                jobDescription="Operated company database to reach out to potential clients. Processed all correspondence and paperwork related to accounts. Met 100% of weekly outreach goals with potential clients and policy module completion."
                />
              <Experience
                startYear={2011}
                endYear={2014}
                jobName='Associate Designer'
                jobDescription="Coordinated with other professionals, such as contractors, architects, engineers, to ensure job success. Estimated material requiredment and costs, and presented designs to client for approval. Rendered design ideas in forms of paste-ups or drawings."
                />
              <hr style={{borderTop: '3px solid #833fb2'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume
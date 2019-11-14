import React, { Component } from 'react'
import one from '../../assets/art_1.jpg'
import two from '../../assets/art_2.jpg'
import three from '../../assets/art_3.jpg'
import four from '../../assets/art_4.jpg'
import five from '../../assets/art_5.jpg'
import six from '../../assets/art_6.jpg'
import seven from '../../assets/art_7.jpg'
import eight from '../../assets/art_8.jpg'
import nine from '../../assets/art_9.jpg'
import ten from '../../assets/art_10.jpg'
import eleven from '../../assets/art_11.jpg'
import twelve from '../../assets/art_12.jpg'
import thirteen from '../../assets/art_13.jpg'
import fourteen from '../../assets/art_14.jpg'
import fifteen from '../../assets/art_15.jpg'
import sixteen from '../../assets/art_16.jpg'
import seventeen from '../../assets/art_17.jpg'
import eighteen from '../../assets/art_18.jpg'
import './Project.css'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'


class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/ca/83/d7/ca83d752d6726aaa53528fe32452fbcd.jpg) center / cover'}} >Project #1: Food Finder</CardTitle>
            <CardText>
              A vanilla JavaScript project made for foodies looking for the right restaurant!
            </CardText>
            <CardActions border>
              <Button href='https://github.com/DeanJG/BathDonkies' rel='noopener noreferrer' target='_blank' colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://res.cloudinary.com/teepublic/image/private/s--FMtZ7cJv--/t_Preview/b_rgb:17420f,c_limit,f_jpg,h_630,q_90,w_630/v1455555280/production/designs/421584_1.jpg) center / cover'}} >React Project #2:Pokedex</CardTitle>
            <CardText>
              A simple pokedex displaying the base stats and abilities of pokemon.
            </CardText>
            <CardActions border>
              <Button href='https://github.com/ninaw1/pokedex_react' rel='noopener noreferrer' target='_blank' colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://us.123rf.com/450wm/llesia/llesia1602/llesia160200015/51629583-stock-vector-store-facade-vector-illustration-of-store-building-ideal-for-business-web-publications-and-graphic-d.jpg?ver=6) center / cover'}} >React Project #3: POS Me</CardTitle>
            <CardText>
              A point of sale app made for the use of small businesses.
            </CardText>
            <CardActions border>
              <Button href='https://github.com/we-are-pos/posme' rel='noopener noreferrer' target='_blank' colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          <h1>Welcome to my Art Portfolio</h1> 
          <div className='card-deck'>
            <div className="card">
              <img src={one} className="card-img-top" alt="pieceOne"></img>
            </div>
            <div class="card">
              <img src={two} className="card-img-top" alt="pieceOne"></img>
            </div>
            <div className="card">
              <img src={three} className="card-img-top" alt="pieceOne"></img>
            </div> 
          </div>
          <div className='card-deck'>
            <div className="card">
              <img src={four} className="card-img-top" alt="pieceOne"></img>
            </div> 
            <div className="card">
              <img src={five} className="card-img-top" alt="pieceOne"></img>
            </div> 
            <div className="card">
              <img src={six} className="card-img-top" alt="pieceOne"></img>
            </div>  
          </div>
          <div className='card-deck'>
            <div className="card">
              <img src={seven} className="card-img-top" alt="pieceOne"></img>
            </div>      
            <div className="card">
              <img src={eight} className="card-img-top" alt="pieceOne"></img>
            </div>   
            <div className="card">
              <img src={nine} className="card-img-top" alt="pieceOne"></img>
            </div>   
            <div className="card">
              <img src={eighteen} className="card-img-top" alt="pieceOne"></img>
            </div>   
          </div>
          <div className='card-deck'>
            <div className="card">
              <img src={ten} className="card-img-top" alt="pieceOne"></img>
            </div>  
            <div className="card">
              <img src={eleven} className="card-img-top" alt="pieceOne"></img>
            </div>  
            <div className="card">
              <img src={twelve} className="card-img-top" alt="pieceOne"></img>
            </div>  
            <div className="card">
              <img src={thirteen} className="card-img-top" alt="pieceOne"></img>
            </div>  
          </div>
          <div className='card-deck'>
            <div className="card">
              <img src={fourteen} className="card-img-top" alt="pieceOne"></img>
            </div>  
            <div className="card">
              <img src={fifteen} className="card-img-top" alt="pieceOne"></img>
            </div>  
            <div className="card">
              <img src={sixteen} className="card-img-top" alt="pieceOne"></img>
            </div>  
            <div className="card">
              <img src={seventeen} className="card-img-top" alt="pieceOne"></img>
            </div>  
          </div>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>These are adobe etc</h1></div>
      )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Portfolio</Tab>
          <Tab>Design</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects
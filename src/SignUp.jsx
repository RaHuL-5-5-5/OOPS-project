import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import Logo from './logo.jsx' 
import Loginpagepic from './LoginPagePic.jsx' 

export default class MenuExampleCompact extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div className='outer'>
        <div>
        <Logo/>
        </div>
       <div className='container' style={{ position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '360px', paddingLeft: '50px' }}>
      <Menu compact icon='labeled' color='black' size='massive'>
        <Menu.Item
          name='Student'
          active={activeItem === 'Student'}
          onClick={this.handleItemClick}
          style={{ backgroundColor: activeItem === 'Student' ? 'skyblue' : '' }}
        >
        Student
        </Menu.Item>

        <Menu.Item
          name='Faculty'
          active={activeItem === 'Faculty'}
          onClick={this.handleItemClick}
          style={{ backgroundColor: activeItem === 'Faculty' ? 'skyblue' : '' }}

        >
          Faculty
        </Menu.Item>
      </Menu>
      <div style={{ position: 'absolute', top: '70%', left: '13%', transform: 'translate(-50%, -50%)' }}>
  <input className='LoginInput' name="myInput"  placeholder="Username" style={{width:"220px"}}/>
      </div>
      <div style={{ position: 'absolute', top: '85%', left: '13%', transform: 'translate(-50%, -50%)' }}>
  <input className='LoginInput' name="myInput"  placeholder="Username" style={{width:"220px"}}/>
      </div>
      <div style={{ position: 'absolute', top: '100%', left: '13%', transform: 'translate(-50%, -50%)' }}>
  <input className='LoginInput' name="myInput"  placeholder="Username" style={{width:"220px"}}/>
      </div>
      <div style={{ position: 'absolute', top: '115%', left: '13%', transform: 'translate(-50%, -50%)' }}>
  <input className='LoginInput' name="myInput"  placeholder="Username" style={{width:"220px"}}/>
      </div>
      <button className='LoginButton' style={{ position: 'absolute', top: '130%', left: '13%', transform: 'translate(-50%, -50%)' ,width:"220px"}}>
    signup
</button>      </div>
   <Loginpagepic/>
      </div>
    )
  }
}
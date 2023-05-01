import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='navbar1'>
        <Menu pointing secondary>
        <Menu.Item>
          <img alt="logo" src="./images/logo.png" />
        </Menu.Item>
          <Menu.Item
            name='Dashboard'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Search'
            active={activeItem === 'Search'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Request'
            active={activeItem === 'Request'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          <Menu.Item>
          <img  width={15} height={18}alt="logo" src="./images/logout.jpg" />
          </Menu.Item>
          <div className='profile'>
            <Menu.Item 
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
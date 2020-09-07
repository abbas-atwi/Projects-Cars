import React, { Component } from 'react'
import navItems from './navItems'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <ul className='header-items'>
          {navItems.map(item => (
            <li key={item.id}>
              <Link to={item.link || ''}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

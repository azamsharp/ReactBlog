
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {

  render() {
    return (
      <div>
      <Header />
      {this.props.children}
      <Footer />
      </div>
    )
  }
}

export class Header extends Component {

  render() {
    return (
      <div>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/contact-us'>Contact Us</Link></button>
      <button><Link to='/about-us'>About Us</Link></button>
      <button><Link to='/add-something'>Add Something</Link></button>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <h1>Footer</h1>
    )
  }
}

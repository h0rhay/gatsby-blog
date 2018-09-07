import React from 'react';
import Link from 'gatsby-link';

const linkStyle = {
  color: 'white',
  fontFamily: 'sans-serif',
  textDecoration: 'none'
}

const Navigation = () => (
  <div style={{
    background: 'dodgerBlue',
    color: 'white'
  }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingTop: '1em'
    }}>
      <li><Link to='/' style={linkStyle} >Home</Link></li>
      <li><Link to='/about' style={linkStyle} >About</Link></li>
      <li><Link to='/docs' style={linkStyle} >Docs</Link></li>
      <li><Link to='/contact' style={linkStyle} >Contact</Link></li>
    </ul>
  </div>
);

export default Navigation;
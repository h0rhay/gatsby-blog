import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: 'white',
  fontFamily: 'sans-serif',
  textDecoration: 'none'
}

// TODO: Language link should be a component

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {
      langToggle: false,
      language: ''
    }
  }

  getLangs() {
    console.log(this.state)
    if(this.state.langToggle) {
      this.setState({langToggle: false});
      let pathArray = location.pathname.split('/');
      pathArray = pathArray.filter( (n) => n != "" ); //just get the actual directories
      const clickedLang = this.state.language;
      if (pathArray[0] === clickedLang) return;
      return this.replaceLangDirectory({pathArray, clickedLang})
    }
  }
  
  replaceLangDirectory(pathArray) {
    pathArray.pathArray.splice(0, 1, `${this.state.language}`);
    this.rebuildPathAndRedirect(pathArray);
  }
  
  rebuildPathAndRedirect(pathArray) {
    let newPath = '';
    pathArray.pathArray.forEach( (e) => {
      newPath += '/';
      newPath += e;
    });
    console.log('final', newPath)
    window.location = newPath;
  }

  languageLink(lang) {
    const handleClick = (e) => {
      e.preventDefault();
      this.setState({langToggle: true});
      this.changeLanguage(e);
    }
    return (
      <a href="#" onClick={handleClick} id='btn_' style={linkStyle} data-lang={lang}>
        {lang === 'en' ? 'English' : 'Chinese'}
      </a>
    )
  }

  changeLanguage(e) {
    const clickedLang = e.target.attributes.getNamedItem('data-lang').value;
    this.setState({language: clickedLang});
  }

  componentDidUpdate() {
    this.getLangs(this.state);
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <div
    style={{
      background: 'darkblue',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ 
        margin: 0,
        display: 'inline-block'
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '1em',
        float: 'right',
        margin: '0'
      }}>
        <li>{this.languageLink(`en`)}</li>
        <li style={linkStyle}>&nbsp; | &nbsp;</li>
        <li>{this.languageLink(`cn`)}</li>
      </ul>
    </div>
  </div>
    )
  }
}

export default Header

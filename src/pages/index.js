import React from 'react'
import Link from 'gatsby-link'

let lang = 'en'

const setDefaultLanguage = (lang) => {
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    let homePageCheck = window.location.pathname.split('/');
    homePageCheck = homePageCheck.filter( (n) => n != "" );
    console.log(homePageCheck)
    if(homePageCheck.length < 1) window.location.href = `${window.location.href}${lang}`
  }
}

const IndexPage = () => {
  setDefaultLanguage(lang)
  return (
    <div>
      <h1>Cardano Documentation</h1>
      <h2>Built with Gatsby using React &amp; GraphQL</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  )
}


export default IndexPage

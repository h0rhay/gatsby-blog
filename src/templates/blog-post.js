import React from 'react';
import Link from 'gatsby-link';
import PageTransition from 'gatsby-plugin-page-transitions'

class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    return (
      <PageTransition>
        <div>
          
          <Link to='/docs'>{`< `}Go back</Link>
          <hr/>
          <h1>{post.frontmatter.title}</h1>
          <h4>By {post.frontmatter.author}</h4>
          <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
      </PageTransition>
    )
  }

}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default BlogPost
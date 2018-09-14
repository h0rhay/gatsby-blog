import React, {Component} from 'react';
import {Index} from 'elasticlunr';

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ``,
            results: [],
        };
    }

    render() {
      console.log('data',this.props)
        return (
            <div>
                <input type="text" value={this.state.query} onChange={this.search}/>
                <ul>
                    {this.state.results.map(page => (
                        <li key={page.id}>
                            <h4>{page.title}: <small>{page.keywords}</small></h4>
                            <p>{page.excerpt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    getIndex = () => {
      // Create an elastic lunr index and hydrate with graphql query results
      this.index = this.index || Index.load(this.props.data.siteSearchIndex.index);
      return this.index;
    }

    search = (evt) => {
        const query = evt.target.value;
        this.index = this.getIndex();
        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index.search(query)
                // Map over each ID and return the full document
                .map(({
                ref,
                }) => this.index.documentStore.docs[ref]),
        });
    }
}
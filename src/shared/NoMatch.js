// shared/NoMatch.js
import React, {Component} from 'react';

class NoMatch extends Component {
    componentDidMount() {
        document.body.className = 'page-not-found';
    }
    render() {
        return (
            <div className="content">
                Whoops! Couldn't find that page.
            </div>
        );
    };
};
export default NoMatch;

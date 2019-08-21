import React, {Component} from 'react';

class Home extends Component {
    componentDidMount() {
        document.body.className = 'page-home';
    }
    render() {
        return (
            <div className="content">
                hi
            </div>
        );
    };
};

export default Home;

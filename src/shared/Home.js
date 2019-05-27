import React, {Component} from 'react';

class Home extends Component {
    componentDidMount() {
        document.body.className = 'page-home';
    }
    render() {
        return (<div className="content">
            <div className="skills">
                <svg viewBox="0 0 280 135">
                    <title>skills</title>
                    <text className="cls-1" transform="translate(175 96)">CSS3</text>
                    <text className="cls-1" transform="translate(83 53)">JavaScript</text>
                    <text className="cls-1" transform="translate(9 23)">HTML5</text>
                    <text className="cls-2" transform="translate(108 30)">Node.js</text>
                    <text className="cls-2" transform="translate(225 65)">less</text>
                    <text className="cls-2" transform="translate(22 90)">webpack</text>
                    <text className="cls-2" transform="translate(15 56)">Redux</text>
                    <text className="cls-2" transform="translate(216 25)">React</text>
                    <text className="cls-3" transform="translate(118 105)">zepto.js</text>
                    <text className="cls-3" transform="translate(99 125)">Express</text>
                    <text className="cls-4" transform="translate(78 107)">jQuery</text>
                    <text className="cls-4" transform="translate(113 86)">Bootstrap</text>
                    <text className="cls-4" transform="translate(248 81)">GIT</text>
                    <text className="cls-4" transform="translate(186 68)">SVN</text>
                    <text className="cls-4" transform="translate(178 110)">handlebars</text>
                    <text className="cls-4" transform="translate(23 37)">browserify</text>
                    <text className="cls-4" transform="translate(113 9)">Underscore</text>
                    <text className="cls-4" transform="translate(182 29)">npm</text>
                    <text className="cls-5" transform="translate(185 16)">PHP</text>
                    <text className="cls-5" transform="translate(139 72)">Grunt</text>
                    <text className="cls-5" transform="translate(209 43)">ping pong</text>
                    <text className="cls-5" transform="translate(36 70)">Adobe Photoshop</text>
                    <text className="cls-3" transform="translate(42 111)">yarn</text>
                </svg>
            </div>
        </div>);
    };
};

export default Home;

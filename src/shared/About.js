import React, {Component} from 'react';

class About extends Component {
    componentDidMount() {
        document.body.className = 'page-about';
    }
    render() {
        return (
            <div className="content">
                <p>
                    I am currently a senior front end developer at <a href="https://www.overstock.com" target="_blank">Overstock.com</a> and
                    get to use many of the tools and technologies mentioned on my home page.
                </p>
                <p>
                    Some of the tools and libraries I used to build this site include React, React Router, Express, Webpack and
                    Less. As a good practice for SEO and page performance, I have the server rendering the complete html.
                </p>
                <p>
                    I love building websites and I enjoy making things with microcontrollers like the raspberry pi and arduino.
                    Bacon and chocolate are part of my staple diet. I have a an amazing family that I love more than anything.
                </p>
            </div>
        );
    };
};
export default About;

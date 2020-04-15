import React, { Component } from 'react';
class About extends Component {
    componentDidMount() {
        document.body.className = 'page-about';
    }
    render() {
        return (
            <div className="content">
                <p>
                    I am a Senior Programmer at <a target="_blank" rel="noopener noreferrer" href="https://macu.com">Mountain America Credit Union</a>, currently focused on building their
                    member and loan origination application. I'm developing in TypeScript, React, Redux, Sass, C#, .NET and SQL with other highly skilled
                    developers.
                </p>
                <p>
                    Before working at MACU I worked for <a target="_blank" rel="noopener noreferrer" href="https://www.overstock.com">Overstock.com</a> for 7 years in several capacities, including
                    Team Lead and Senior Frontend Developer. I was primarily responsible for the customer facing Cart and Checkout pages of the shopping website.
                    During my employment I learned a lot about application architecture, analytics, and customer conversion. I also learned how to use some amazing technologies such as Node.js,
                    React, Redux, Express, Splunk, CI/CD Pipelines, Docker, and many others.
                </p>
                <p>
                    Some of the tools and libraries I used to build shanebarnwell.com include React, React Router, Express, Webpack and
                    Less. As a good practice for SEO and page performance, I have the server rendering the complete html.
                </p>
                <p>
                    I love building websites and I enjoy making things with microcontrollers like the raspberry pi and arduino.
                    Bacon and chocolate are part of my staple diet. I have an amazing family who I love more than anything!
                </p>
                <p>
                    🤓
                </p>
            </div>
        );
    };
};
export default About;

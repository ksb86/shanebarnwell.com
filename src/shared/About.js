import React, { Component } from 'react';
class About extends Component {
    componentDidMount() {
        document.body.className = 'page-about';
    }
    render() {
        return (
            <div className="content">
                <p>
                    I am a Senior Software Engineer working at <a target="_blank" rel="noopener noreferrer" href="https://macu.com">Mountain America Credit Union</a>. Right now, I'm focused on building an internal CMS
                    to administer and manage the public facing macu.com website. Previously, I helped build the front end of the internal member and loan origination application. I'm developing in TypeScript, React, Redux, Sass, Gatsby, Node.js, Nest, SQL, C#, and .NET.
                </p>
                <p>
                    Before working at MACU I worked for <a target="_blank" rel="noopener noreferrer" href="https://www.overstock.com">Overstock.com</a> for 7 years in several capacities, including
                    Team Lead and Senior Frontend Developer. I was primarily responsible for the customer facing Cart and Checkout pages of the shopping website.
                    During my employment I learned a lot about application architecture, analytics, and customer conversion. I also learned how to use some amazing technologies such as Node.js,
                    React, Redux, Express, Splunk, CI/CD Pipelines, Docker, and many others.
                </p>
                <p>
                    Some of the tools and libraries I used to build shanebarnwell.com include React, React Router, Express, Webpack and
                    Less. As a good practice for SEO and page performance, I have the server rendering the complete html.  Disable javascript in your browser and you'll see that the site, although simple, is still fully functional.
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

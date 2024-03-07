import React, { Component } from 'react';
// import fetch from 'isomorphic-fetch';

class Contact extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         message: '',
    //         formDisabled: false
    //     };
    // }
    componentDidMount() {
        document.body.className = 'page-contact';
    }

    // handleContactSubmit = async e => {
    //     e.preventDefault();
    //     const email = document.getElementById('emailInput').value;
    //     const message = document.getElementById('messageInput').value;
    //     if (email.trim().length < 1 || message.trim().length < 1) {
    //         alert('Email and message required');
    //         return false;
    //     }
    //     this.setState({
    //         ...this.state,
    //         formDisabled: true
    //     });

    //     const token = await new Promise((res, rej) => {
    //         grecaptcha.ready(function() {
    //             grecaptcha.execute('6LcNzugUAAAAAJwPesYxSIz6nhDdtJ0uVXJW-r7x', {action: 'contact'}).then(function(token) {
    //                res(token);
    //             });
    //         });
    //     });

    //     fetch('/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=UTF-8'
    //         },
    //         body: JSON.stringify({email, message, js: true, token})
    //     }).then((data) => {
    //         if(data.ok) {
    //             return data.json();
    //         }
    //         throw new Error('Network response was not ok.');
    //     }).then(response => {
    //         if (response.sent) {
    //             this.setState({
    //                 ...this.state,
    //                 message: 'Thanks for your message!'
    //             });

    //             return;
    //         }
    //         this.setState({
    //             ...this.state,
    //             message: 'Your message wasn\'t sent, please try again',
    //             formDisabled: false
    //         });

    //         return;
    //     }).catch((error) => {
    //         console.log('error: ', error);

    //         this.setState({
    //             ...this.state,
    //             message: 'Your message wasn\'t sent, please try again',
    //             formDisabled: false
    //         });
    //     });
    // };

    render() {
        return (
            <div className="content">
                <div className="social">
                    <a href="https://www.linkedin.com/in/shane-barnwell/" target='_blank' rel="noopener noreferrer">
                        <svg className="social-logo" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g></svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/ksb86" target='_blank' rel="noopener noreferrer">
                        <svg className="social-logo"  width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/></svg>
                        <span>GitHub</span>
                    </a>
                </div>
                {/* <form className="contact-form" onSubmit={this.handleContactSubmit} action="/contact" method="post">
                    <div className="form-group">
                        <span className="form-message">{this.state.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Your Email</label>
                        <input disabled={this.state.formDisabled} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Your Email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="messageInput">Your Message</label>
                        <textarea disabled={this.state.formDisabled} className="form-control" id="messageInput" rows="3" placeholder="Your Message" name="message" />
                    </div>
                    <button disabled={this.state.formDisabled} type="submit" className="contact-btn">Send</button>
                </form> */}
            </div>
        );
    };
};
export default Contact;

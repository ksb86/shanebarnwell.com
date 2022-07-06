import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            formDisabled: false
        };
    }
    componentDidMount() {
        document.body.className = 'page-contact';
    }

    handleContactSubmit = async e => {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;
        if (email.trim().length < 1 || message.trim().length < 1) {
            alert('Email and message required');
            return false;
        }
        this.setState({
            ...this.state,
            formDisabled: true
        });

        const token = await new Promise((res, rej) => {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LcNzugUAAAAAJwPesYxSIz6nhDdtJ0uVXJW-r7x', {action: 'contact'}).then(function(token) {
                   res(token);
                });
            });
        });

        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({email, message, js: true, token})
        }).then((data) => {
            if(data.ok) {
                return data.json();
            }
            throw new Error('Network response was not ok.');
        }).then(response => {
            if (response.sent) {
                this.setState({
                    ...this.state,
                    message: 'Thanks for your message!'
                });

                return;
            }
            this.setState({
                ...this.state,
                message: 'Your message wasn\'t sent, please try again',
                formDisabled: false
            });

            return;
        }).catch((error) => {
            console.log('error: ', error);

            this.setState({
                ...this.state,
                message: 'Your message wasn\'t sent, please try again',
                formDisabled: false
            });
        });
    };

    render() {
        return (
            <div className="content">
                <form className="contact-form" onSubmit={this.handleContactSubmit} action="/contact" method="post">
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
                </form>
            </div>
        );
    };
};
export default Contact;

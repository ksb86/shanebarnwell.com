// shared/NavBar.js
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
const links = [
    {
        href: '/',
        linkText: 'Home',
        className: 'home'
    }, {
        href: '/about',
        linkText: 'About',
        className: 'about'
    }, {
        href: '/contact',
        linkText: 'Contact',
        className: 'contact'
    }
];

class NavBar extends Component {
    render() {
        return (
            <nav>
                {links.map(({linkText, href, className}) => (
                    <NavLink key={href} to={href} className={`nav-link nav-${className}`} activeClassName="active">
                        {linkText}
                    </NavLink>
                ))}
            </nav>
        );
    }
}

export default NavBar;

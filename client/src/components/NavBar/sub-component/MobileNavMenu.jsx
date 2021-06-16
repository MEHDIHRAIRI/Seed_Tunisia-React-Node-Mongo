import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavMenu = () => {
    return (
        <nav className="site-mobile-menu">
            <ul>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span >Homepage</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Services</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span>Work</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span>Blog</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavMenu;

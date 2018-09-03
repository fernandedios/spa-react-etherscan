import React from 'react';
import './../index.css';

const Header = () => {
    return (
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">ReactJS with Redux</a>
            </div>
        </nav>
    );
}

export { Header };

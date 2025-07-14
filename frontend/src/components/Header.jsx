import React from 'react';


export default function Header() {
    return (
        
        <div className='header'>
            <div className="container">
                <a href="/" className="header-item-link" id='logo'>
                    <img src="/site-logo.jpg" alt="" className="site-logo" />
                </a>
                <a href="" className="header-item-link">About</a>
                <a href="" className="header-item-link">Source</a>    
            </div>
        </div>
    );
}


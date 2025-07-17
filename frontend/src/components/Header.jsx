import React from 'react';


export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <a href="/" className="header-item-link" id='logo'>
                    <img src="/site-logo.jpg" alt="" className="site-logo" />
                </a>
                {/* <a href="" className="header-item-link">About</a> */}
                <a href="https://github.com/hate-red/tonality" target='_blank' className="header-item-link">
                    <img src="/gh.png" alt="" className='header-icon'/>
                </a>    
            </div>
        </div>
    );
}


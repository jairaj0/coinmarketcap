import React from 'react';
import './miniNavScss/miniNav.css';

function MiniNavValue(props) {
    return (
        <div>
            <nav className="mini_nav">
                <h1 className="mini_nav_title">{props.mini_nav_title}</h1>
                <h1 className="mini_nav_value">{props.mini_nav_value}</h1>
            </nav>
        </div>
    )
}

export default MiniNavValue;

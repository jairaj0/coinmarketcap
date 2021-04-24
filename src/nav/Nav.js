import React from 'react';
import './navScss/nav.css';
import logoLight from '../img/coinmarketcap_logo_light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell , faSearch } from '@fortawesome/free-solid-svg-icons';

const bell = <FontAwesomeIcon icon={faBell} />
const search = <FontAwesomeIcon icon={faSearch} />


function Nav() {
    return (
        <div className="main_nav">
            <nav className="container flex-between">
                <div className="left_nav flex-between">
                    <div className="logo"><img src={logoLight} width="170" alt="logo"/></div>
                    <div className="flex cryptocurrencies">cryptocurrencies</div>
                    <div className="flex exchanges">exchanges</div>
                    <div className="flex portfolio">portfolio</div>
                    <div className="flex watchlist">watchlist</div>
                    <div className="flex ico_calendar">ICO calendar <div className="nav_notification"></div><div className="nav_notification_mini"></div></div>
                    <div className="flex products">products</div>
                    <div className="flex learn">learn <div className="nav_notification"></div><div className="nav_notification_mini"></div></div>
                </div>

                <div className="right_nav flex-between">
                    <div className="bell">{bell}</div>
                    <div className="log_in">log in</div>
                    <div className="sign_up">sign up</div>
                    <div className="search_box flex-between">
                        {search}
                        <h1 className="search">search</h1>
                        <div className="slash">/</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav

// rfce 

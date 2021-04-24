import React from 'react';
import './miniNavScss/miniNav.css';
import MiniNavData from './MiniNavData';
import MiniNavValue from './MiniNavValue';
import gas from '../img/gasoline-pump.svg';
import dollarSymbol from '../img/dollar-symbol.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon , faChevronCircleDown , faSortDown , /*faDollarSign*/ } from '@fortawesome/free-solid-svg-icons';

const down_arrow = <FontAwesomeIcon icon={faSortDown} /> 
const down_arr = <FontAwesomeIcon icon={faChevronCircleDown} /> 
const moon = <FontAwesomeIcon icon={faMoon} /> 
// const dollar = <FontAwesomeIcon icon={faDollarSign} /> 

function MiniNav() {
    return (
        <div className="top_mini_nav">
           <div className="mini_nav_main container flex-between">
          <div className="flex mini_nav_values">
          {
                MiniNavData.map((val, ind) => {
                      return <MiniNavValue
                        key={ind} 
                        mini_nav_title={val.mini_nav_title}
                        mini_nav_value ={val.mini_nav_value}
                      />
                  })
              }

            <h1 className="mini_nav_title flex"><img src={gas} width="15" alt="gasoline"/> ETH Gas:</h1>
             <h1 className="mini_nav_value">147 Gwei {down_arrow}</h1>
          </div>
          <div className="flex">
              <div className="lang">English {down_arr}</div>
              <div className="currency flex"><img src={dollarSymbol} width="15" alt="gasoline"/> <span>USD</span> {down_arr}</div>
              <div className="theme">{moon}</div>
          </div>
          </div>
        </div>
    )
}

export default MiniNav;

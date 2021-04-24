import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-regular';
import { faChartPie , faFilter , faTable , faAngleDown } from '@fortawesome//free-solid-svg-icons';
import './conentHeaderScss/contentHeader.css';


const star = <FontAwesomeIcon icon={faStar} />
const chart_pie = <FontAwesomeIcon icon={faChartPie} />
const filter = <FontAwesomeIcon icon={faFilter} />
const table = <FontAwesomeIcon icon={faTable} />
const down_sign = <FontAwesomeIcon icon={faAngleDown} />

function ContentHeader() {
    return (
        <div>
           <div className="container flex-between">

           <div className="left_contentheader flex-between">
           <div className="watchlist_portfolio flex-between">
               <div className="watchlist contentHeaderBox"><span>{star}</span> watchlist</div>
               <div className="portfolio contentHeaderBox"><span>{chart_pie}</span> portfolio</div>
           </div>

           <div className="slash">|</div>

           <div className="cdnpby flex-between">
               <div className="cryptocurrencies contentHeaderBox crypto_active">Cryptocurrencies</div>
               <div className="defi contentHeaderBox">DeFi</div>
               <div className="nft contentHeaderBox">NFT</div>
               <div className="polkadot contentHeaderBox">Polkadot Eco</div>
               <div className="bsc contentHeaderBox">BSC Eco</div>
               <div className="yield contentHeaderBox">Yield Farming</div>
           </div>

           </div>

           <div className="right_contentheader flex-between">
               <div className="content_header_show_rows flex">Show rows <div className="count contentHeaderBox" >20 {down_sign}</div></div>
               <div className="content_header_filters contentHeaderBox"><span>{filter}</span> filters</div>
               <div className="content_header_customize contentHeaderBox"><span>{table}</span> customize</div>
           </div>
           </div>
        </div>
    )
}

export default ContentHeader

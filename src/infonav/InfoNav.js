import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp , faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import './infoNavScss/infoNav.css';

const increase = <FontAwesomeIcon icon={faCaretUp} />
const info = <FontAwesomeIcon icon={faInfoCircle} />

function InfoNav() {
    return (
        <div className="infoNav">
            <div className="container">
                <div className="infonav flex-between">
                <div className="flex hatch"># <span>{increase}</span></div>
                <div className="flex name">name</div>
                <div className="flex price">price</div>
                <div className="flex daily">24h %</div>
                <div className="flex week">7d %</div>
                <div className="flex market_cap">market cap <span className="info_icon">{info}</span></div>
                <div className="flex volume">volume(24h) <span className="info_icon">{info}</span></div>
                <div className="flex circulating">circulating supply <span className="info_icon">{info}</span></div>
                <div className="flex lastdays">last 7 days</div>
                </div>
       </div>
        </div>
    )
}

export default InfoNav;

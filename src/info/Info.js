import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-regular';
import { faCaretDown , faCaretUp , faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import './infoScss/info.css';

var downD = <FontAwesomeIcon icon={faCaretDown} />
var downW = <FontAwesomeIcon icon={faCaretDown} />
var upD = <FontAwesomeIcon icon={faCaretUp} />
var upW = <FontAwesomeIcon icon={faCaretUp} />
const star = <FontAwesomeIcon icon={faStar} />
const opt_info = <FontAwesomeIcon icon={faEllipsisV} />


function Info(props) {

let minD = props.minD
let minW = props.minW
let daily_value_num_value = props.daily_value_num_value;
let week_value_num_value = props.week_value_num_value;
let decD = {color : "crimson"}
let decW = {color : "crimson"}
let incD = {color : "cyan"}
let incW = {color : "cyan"}
let bad = {filter : "hue-rotate(300deg) saturate(7) brightness(60%)"}
let good = {filter : "hue-rotate(90deg)"}

let statusD = upD;
let statusW = upW;
let graphS = good;
let graphValue = props.graphS;

if(graphValue === "good"){
    graphS = good
}else{
    graphS = bad
}

if (daily_value_num_value <= minD){
    incD = decD
    statusD = downD
    // console.log("daily_value_num_value <= minD")
}else if(daily_value_num_value > minD){
    decD = incD
    statusD = upD
    // console.log("daily_value_num_value > minD")
}


if(week_value_num_value >= minW){
    decW = incW
    statusW = upW
    // console.log("week_value_num_value >= minW")
}else if(week_value_num_value < minW){
    incW = decW
    statusW = downW
    // console.log("week_value_num_value < minW")
}else{
    console.log('something went wrong...!!!')
}


    return (
        <div>
            <div className="container">
                <div className="info flex-between">
                    <div className="flex star">{star}</div>
                    <div className="flex hatch_count">{props.hatch_count}</div>
                    <div className="flex name_value"><img src={props.name_value_img} width="24" height="24" alt="btc"/><span style={{marginLeft : "10px"}}>{props.name_value}</span></div>
                    <div className="flex price_value">${props.price_value}</div>
                    <div className="flex daily_value" style={incD}>{statusD}&nbsp;<span className="daily_value_num">{daily_value_num_value}</span>%</div>
                    <div className="flex week_value" style={incW}>{statusW}&nbsp; <span className="week_value_num">{week_value_num_value}</span> %</div>
                    <div className="flex market_cap_value">${props.market_cap_value}</div>
                    <div className="flex volume_value">{props.volume_value}<span className="volume_value_btm">{props.volume_value_btm}</span></div>
                    <div className="flex circulating_value">{props.circulating_value}<span className="circulating_value_btm"><span className="fill"></span></span></div>
                    <div className="flex lastdays_img"><img src={props.graph} className="graph" style={graphS} width="150" height="53" alt="graph"/></div>
                    <div className="flex opt_info">{opt_info}</div>      
                </div>
            </div>
        </div>
    )
}

export default Info

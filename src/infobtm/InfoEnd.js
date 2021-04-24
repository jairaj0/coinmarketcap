import React from 'react';
import './infobtmScss/infoEnd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight , faAngleDown} from '@fortawesome/free-solid-svg-icons';


var left_arrow = <FontAwesomeIcon icon={faAngleLeft} />
var right_arrow = <FontAwesomeIcon icon={faAngleRight} />
var down_arrow = <FontAwesomeIcon icon={faAngleDown} />


function InfoEnd() {
    return (
        <div>
            <div className="container">
                <div className="flex info_end">
                    <div className="info_end_opt flex-between">

                    <div className="showing">Showing 1 - 20 out of 4399</div>

                    <div className="counting flex-between"><div className="left_arrow flex-center">{left_arrow}</div>
                    <div className="count count_active flex-center">1</div>
                    <div className="count flex-center">2</div>
                    <div className="count flex-center">3</div>
                    <div className="count flex-center">4</div>
                    <div className="count flex-center">5</div>
                    <div className="count flex-center">6</div>
                    <div className="count flex-center count_more">...</div>
                    <div className="count flex-center">220</div>
                     <div className="left_arrow flex-center">{right_arrow}</div>
                     </div>

                     <div className="show_rows flex">Shows rows <span className="show_rows_div flex-between">20{down_arrow}</span> </div>
                    </div>

                    

                    <div className="info_end_RM">Find out how we work by clicking here . <span className="info_end_RM_btn">Read More</span></div>
                </div>
            </div>
        </div>
    )
}

export default InfoEnd

import React from 'react';
import './headerScss/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp , faCaretDown , faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';
import SliderData from './SliderData';


const increase = <FontAwesomeIcon icon={faCaretUp} />
const decrease = <FontAwesomeIcon icon={faCaretDown} />
const left = <FontAwesomeIcon icon={faChevronLeft} />
const right = <FontAwesomeIcon icon={faChevronRight} />


function Header() {
    return (
        <div className="container flex-between header">
            <div className="header_title">
                <h1 className="header_title_txt">
                    Today's cryptocurrency proces by market cap 
                </h1>
                <p className="header_dis">
                The global crypto market cap is $1.74T, a <span className="header_status">{increase} 1.01%</span> increase over the last day.<span className="header_read_more">Read more</span>
                </p>
            </div>

            <div className="header_slider flex">
            <div className="header_left_btn header_btn flex">{left}</div>
            {
                SliderData.map((value, index) => {
                      return <Slider
                        key={index} 
                        slide_img={value.slide_img}
                        slide_dis ={value.slide_dis}
                        slide_title ={value.slide_title}
                      />
                  })
              }
              <div className="header_right_btn header_btn flex">{right}</div>
            </div>
        </div>
    )
}

export default Header

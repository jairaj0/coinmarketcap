import React from 'react';
import './headerScss/slider.css';

function Slider(slide) {
    return (
        <div>
            <div className="slide_1 flex">
                    <div><img className="slide_1_img" src={slide.slide_img} width="64" height="64" alt="dog"/></div>
                    <div>
                        <p className="slide_1_dis">{slide.slide_dis}</p>
                        <h1 className="slide_1_title">{slide.slide_title}</h1>
                    </div>
                </div>
        </div>
    )
}

export default Slider

import React from 'react';
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
};

const SimpleSlider = () => {
    return (
        <Slider {...settings}>
            <div >
                <h3 style={{ border: "1px solid red", color: "red", height: "200px", background: "blue" }}></h3>
            </div>
            <div>
                <h3 style={{ border: "1px solid red", color: "red", height: "200px", background: "red" }}></h3>
            </div>
            <div>
                <h3 style={{ border: "1px solid red", color: "red", height: "200px", background: "yellow" }}></h3>
            </div>
            <div>
                <h3 style={{ border: "1px solid red", color: "red", height: "200px", background: "pink" }}></h3>
            </div>

        </Slider>
    );
};

export default SimpleSlider;
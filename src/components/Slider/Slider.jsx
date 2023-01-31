import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ItemListContainer from '../../container/ItemListContainer';
import './style.css'


function Slider() {
    return (
        <div className="sliderContainer">
            <div className='carouselContenedor'>
                <style type="text/css">
                    {`
            .carousel-indicators {
               margin-left: 0%;
              }
             `}
                </style>
                <Carousel >
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider0.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider1.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider3.jpg"
                            alt="fourth slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider4.jpg"
                            alt="fith slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider5.jpg"
                            alt="six slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider6.jpg"
                            alt="seven slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider7.jpg"
                            alt="eight slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src="assets/slider8.jpg"
                            alt="nine slide"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>

            <span>
                <ItemListContainer />
            </span>

        </div>
    );

}

export default Slider;
import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

import ItemListContainer from '../../container/ItemListContainer';

function Slider() {
    return (
        <>
            return (
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="assets/slider0.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="assets/slider1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider3.jpg"
                        alt="fourth slide"
                    />
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider4.jpg"
                        alt="fith slide"
                    />
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider5.jpg"
                        alt="six slide"
                    />
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider6.jpg"
                        alt="seven slide"
                    />
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider7.jpg"
                        alt="eight slide"
                    />
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/slider8.jpg"
                        alt="nine slide"
                    />
                </Carousel.Item>


            </Carousel>

            <h2>All products</h2>
            <ItemListContainer />
        </>
    );

}

export default Slider;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide from '../Assets/slide.jpg';

export default function Slider () {

    return (
        <>
            <Carousel>
                <Carousel.Item style={ {'height': '660px'} }>
                    <img
                        className='d-block w-100'
                        src={slide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={ {'height': '660px'} }>
                    <img
                        className='d-block w-100'
                        src={slide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={ {'height': '660px'} }>
                    <img
                        className='d-block w-100'
                        src={slide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
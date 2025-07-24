"use client"
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};


function Review() {
  return (
    <div className='py-16'>
        <SectionHeading heading='Testimonials From Customers' subHeading='Hear what our satisfied users have to say about their job search experience.'/>
        <div className='w-[80%] mx-auto mt-16'>
            <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            >
                <ReviewCard image="/images/u1.png" title="Great Quality!" username="Jasica Doe" userRole="App Developer"/>
                <ReviewCard image="/images/u2.png" title="Awesome Work!" username="Jason Doe" userRole="Web Developer"/>
                <ReviewCard image="/images/u3.png" title="Best Work!" username="Jenny Doe" userRole="Game Developer"/>
            </Carousel>
        </div>
    </div>
  )
}

export default Review
import React from 'react';
import NavBar from '../components/home/navBar';
import ZillowTestimonials from '../components/zillowTestimonials';
import Footer from '../components/home/footer';
import SubmitTestimonialsButton from '../components/submitTestimonialsButton';

export default function Testimonials() {
  return (
    <>
      <NavBar/>
      <SubmitTestimonialsButton/>
      <ZillowTestimonials/>
    </>
  )
}

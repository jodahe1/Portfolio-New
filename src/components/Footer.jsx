import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='contact-section shrink h-auto py-20 w-full bg-secondary'>
      <div className='sm:flex md:ml-10 justify-between items-start mx-2'>
        <div className='mx-auto'>
          <h1 className='text-2xl text-primary font-bold mb-7'>Yodahe Teshome</h1>
          <div className='md:w-[350px] lg:w-[510px]'>
            <p className="text-primary text-start font-bold font-medium">A Result-Oriented Software Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 mx-auto mt-10 md:mt-0'>
          <h1 className='text-primary text-xl font-bold'>Social</h1>
          <div className='flex flex-wrap gap-4'>
            <a className='h-[26px] w-[26px]' href="https://www.linkedin.com/in/yodahe-teshome-75a539200/" target="_blank" rel="noopener noreferrer"><img src="/assets/linkedin.png"/></a>
            <a className='h-[26px] w-[26px]' href="https://t.me/yodaheteshome" target="_blank" rel="noopener noreferrer"><img src="/assets/telegram.png"/></a>
            <a className='h-[26px] w-[26px]' href="https://github.com/jodahe1" target="_blank" rel="noopener noreferrer"><img src="/assets/github.png"/></a>
            <a className='h-[26px] w-[26px]' href="https://mailto:yodaheteshome1@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/assets/gmail.png"/></a>
             </div>
        </div>
      </div>
      <hr className='mx-auto w-[75%] solid border-1 mt-10 text-primary'></hr>
      <div className='flex justify-center items-center mt-10'>
      <p className='text-center text-primary  mx-auto'>© Copyright 2025 . Made by Yodahe Teshome</p>
      </div>
    </div>
    
  )
}

export default Footer
import React from 'react'

const About = ({scrollTo}) => {
  return (
    <div className='flex flex-col justify-center gap-9 bg-background sm:py-20'>
      <div className='flex flex-col justify-center items-center mx-auto max-w-[750px] my-6'>
        <h1 className='text-primary text-3xl font-bold'>About Me</h1>
        <p className='text-gray-400 text-center my-3 text-[20px]'>Here you will find more information about me,
          what I do, and my current skills mostly in terms
          of programming and technology</p>
      </div>

      <div className='flex flex-col md:flex-row md:gap-30 justify-center gap-10 items-center sm:px-10'>
        <div className='w-[390px] md:w-[600px]'>
          <h1 className='text-primary text-3xl font-bold my-5'>Get to know me!</h1>
          <div className=' text-gray-400 text-start tracking-wide text-[20px] flex flex-col gap-2'>
                 <p>
                  I’m Yodahe Teshome, a Software Developer with a degree in Computer Science from HiLCOE, graduating with great distinction. I have a strong passion for backend development, where I focus on building reliable, scalable, and high-performance systems. I’m equally drawn to data analysis, uncovering patterns and transforming complex datasets into actionable insights. Driven by curiosity and a problem-solving mindset, I continuously explore new tools and technologies to craft innovative, impactful, and efficient solutions.
                   </p>
                 <button onClick={scrollTo} className='border border-secondary w-[150px] h-[45px] mt-5 cursor-pointer rounded-md hover:bg-secondary text-secondary font-bold my-0 transition duration-300 ease-in-out hover:text-white'>Contact</button>
          </div>
          
        </div>
        <div className='w-[300px] sm:w-[700px]'>
          <h1 className='text-primary text-3xl font-bold my-6 '>My skills</h1>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-8 justify-center rounded-b-md hover:drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)] transition-drop-shadow duration-300">
           <div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' alt="Express.js"/>
  <p className='text-primary'>Express.js</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://nestjs.com/img/logo_text.svg' alt="Nest.js"/>
  <p className='text-primary'>Nest.js</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt="Git"/>
  <p className='text-primary'>Git</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' alt="Laravel"/>
  <p className='text-primary'>Laravel</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' alt="Python"/>
  <p className='text-primary'>Python</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="React"/>
  <p className='text-primary'>React</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' alt="Next.js"/>
  <p className='text-primary'>Next.js</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' alt="TypeScript"/>
  <p className='text-primary'>TypeScript</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' alt="C++"/>
  <p className='text-primary'>C++</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' alt="Docker"/>
  <p className='text-primary'>Docker</p>
</div>
<div className='flex flex-col items-center w-[80px]'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' alt="Node.js"/>
  <p className='text-primary'>Node.js</p>
</div>

          </div>
          
        </div>
      </div>
      </div>
  )
}

export default About
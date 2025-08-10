import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-9 py-30 bg-linear-to-b from-background to-cyan-950'>
      <h1 className='text-amber-50 text-5xl'>My Works</h1>
      <p className='text-primary text-2xl mb-10'>A collection of projects I've worked on.</p>
      <div className='flex flex-col md:flex-row gap-7 items-center justify-center '>
        <Card
        webLink="https://github.com/jodahe1/school-management-system.git"
        imgSrc='/assets/educonnect.png'
          title = "edu-connect" 
          description = "The goal of the project is to build a centralized system which can connect stakeholders in school like parent , teacher and students beyond that it also have admin dashboard which allow the school board to manage different aspects. and it have payment processing which is done with stripe api. you can check more about it using the github link to the project."/>

         <Card
        webLink="https://github.com/jodahe1/propertymanagment.git"
        imgSrc='/assets/propertymgt.png'
          title = "Property Management" 
          description = "On this project i build a property management system using nest js it can be used by hotels , apartment owners it help them to manage their property easily and it allow users(customers) in the case of hotels to make a booking , manage their bookings. It's all back end for now i didn't build the front end for it you can check more about by clicking the button below. "/>

      
          <Card 
        webLink="https://github.com/jodahe1/Portfolio-New.git"
        imgSrc='/assets/Portfolioimg.jpg'
        title="Portfolio"
        description="Create a clean, professional, and responsive portfolio website to showcase my personal projects, skills, resume, and contact information. The site should include a homepage with a short introduction, a projects section with images and descriptions, an about page with my background and skills, and a contact form. Use modern design elements, smooth scrolling, and subtle animations to enhance user experience"/>
      </div>
    </div>
  )
}

export default Projects
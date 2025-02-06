import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

const Contact = () => {
  return (
    <div className='p-16 border border-solid border-gray-300'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-8'>
            <h2 className='text-4xl font-serif font-bold bg-clip-text text-transparent  bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700' data-aos='zoom-in-up'>Contact Information</h2>
            <p className='text-2xl pt-2 font-serif' data-aos='zoom-in-up'>
            Fill up the from and our Team will get back to you within <span className='text-blue-500 font-bold'>24 hours</span> 
            </p>
            <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
              <AiOutlineMail size={30} /> 
              <a href="mailto:muhammadumar128512@gmail.com"> muhammadumar128512@gmial.com</a>
            </div>
            <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
              <BsTelephone size={30} /> 03122726480
            </div>
            <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
              <SlSocialLinkedin  size={30} />
              <a href="https://www.linkedin.com/in/shagufta-zakir-3597552b2" target="_blank">www.linkedin.com</a>
              
            </div>
          </div>
          <div className='space-y-8'>
            <div className='flex flex-col gap-1'  data-aos='zoom-in-up'>
                <h2 className='text-4xl font-serif font-bold bg-clip-text text-transparent  bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700'>Send us a message</h2>
              <label htmlFor='name'>Name</label>
              <input type='text'
              className='h-[40px] bg-transparent border border-sky-400' id='name' />
            </div>
            <div className='flex flex-col gap-1'  data-aos='zoom-in-up'>
              <label htmlFor='email'>Email</label>
              <input type='text'
              className='h-[40px] bg-transparent border border-sky-400' id='email' />
            </div>
            <div className='flex flex-col gap-1'  data-aos='zoom-in-up'>
              <label htmlFor='message'>Message</label>
              <textarea
              className='bg-transparent border border-sky-400' id='message' rows={8}/>
            </div>
            <button className='bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700 p-4 px-8 rounded-lg' data-aos='zoom-in-up'>Send Message</button>
          </div>
        </div>
    </div>
  )
}

export default Contact
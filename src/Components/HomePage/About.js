import React from 'react';
import aboutImgPerson from '../../Utility/Images/about_us/person.jpg'
import aboutImageParts from '../../Utility/Images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='lg:flex gap-10 my-20'>
            <div className='relative'>
                <img src={aboutImgPerson} className='w-5/6 h-5/6 rounded-lg' alt="" />
                <div className='absolute bottom-0 right-0 border border-white bg-white rounded-lg'>
                    <img className='w-[400px] p-3' src={aboutImageParts} alt="" />
                </div>
            </div>
            <div>
                <span className='text-[#FF3811] font-bold'>About Us</span>
                <h2 className='text-4xl font-bold'>We are qualified & of experience in this field</h2>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <br />
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='h-[56px] w-[170px] bg-[#FF3811] text-white rounded-lg mt-4'>Get More Info</button>
            </div>
            
        </div>
    );
};

export default About;
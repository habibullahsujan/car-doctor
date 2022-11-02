import React from 'react';

const Facility = ({faci}) => {
    return (
        <div className='border-t-2 border-[#FF3811] bg-[#F3F3F3] p-3 rounded-lg'>
            <h4 className='font-bold text-lg'>{faci.name}</h4>
            <p className='text-[#737373]'>{faci.details}</p>
        </div>
    );
};

export default Facility;
import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto my-14'>
            <div className='text-center mb-16 '>
                <h3 className='text-4xl font-bold text-red-400 mb-6'>Blogs</h3>
                <p>Let's explore some basic concept that will make you a good developer</p>
            </div>

            <div className='text-start shadow-sm border bg-[#0F0F0F15] border-gray-200  p-4 md:p-7 lg:p-10 rounded-2xl space-y-5'>
                <h1 className='text-lg lg:text-xl font-bold'>Book an Appointment</h1>

                <p className='border-b border-[#14141460] border-dashed my-4'></p>

                <div className=''>
                    <h5 className='font-medium text-sky-500'>Answer</h5>
                    <h5 className='font-medium'> here </h5>
                </div>

                <p className='border-b border-[#14141460] border-dashed my-4'></p>

                <div className='date'>
                    <h5>Added at </h5>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
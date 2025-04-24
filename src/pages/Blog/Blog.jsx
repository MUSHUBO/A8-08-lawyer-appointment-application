import React from 'react';

const Blog = ({ blog }) => {
    console.log(blog);

    return (
        <div>
            <div className='text-start shadow-sm border bg-[#0F0F0F15] border-gray-200  p-4 md:p-7 lg:p-10 rounded-2xl space-y-5 mb-7'>
                <h1 className='text-lg lg:text-xl font-bold'> {blog.question} </h1>

                <p className='border-b border-[#14141460] border-dashed my-4'></p>

                <div className=''>
                    <h5 className='font-medium text-sky-500'>Answer</h5>
                    <h5 className='font-medium'> {blog.answer} </h5>
                </div>

                <p className='border-b border-[#14141460] border-dashed my-4'></p>

                <div className='date'>
                    <h5>Added at </h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;
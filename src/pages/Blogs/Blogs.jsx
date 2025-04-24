import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const blogs = useLoaderData();
    // console.log(blogs);

    return (
        <div className='w-10/12 mx-auto my-14'>
            <div className='text-center mb-16 '>
                <h3 className='text-4xl font-bold text-red-400 mb-6'>Blogs</h3>
                <p>Let's explore some basic concept that will make you a good developer</p>
            </div>

            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import { AiOutlineTrademarkCircle } from "react-icons/ai";

const Lawyer = ({ lawyer }) => {
    console.log(lawyer);
    const {image, name, specialty, experience, licenseNumber} = lawyer;

    return (
        <div className="card card-side bg-base-100 shadow-sm p-2 md:p-4 lg:p-6 rounded-2xl">
            <figure>
                <img className='rounded-xl w-52 h-52' src={image} alt="Lawyers-Image" />
            </figure>
            <div className="card-body text-start">
                <div className='lg:flex space-y-2 lg:space-y-0 lg:gap-2 text-center'>
                    <h3 className='bg-[#09982F10] text-[#09982F] ext-xs font-medium px-3 py-1 rounded-full'> Available </h3>
                    <h3 className='bg-[#176AE510] text-[#176AE5] text-xs font-medium px-3 py-2 rounded-full'> {experience} </h3>
                </div>
                <h2 className="card-title text-2xl font-bold"> {name} </h2>
                <p className='font-medium text-[#0F0F0F99]'> {specialty} </p>
                <p className='flex items-center gap-2'> <AiOutlineTrademarkCircle /> License No: {licenseNumber} </p>
                <div>
                    <button className="btn btn-outline btn-primary rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;
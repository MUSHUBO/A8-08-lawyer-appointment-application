import React from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyersData }) => {

    return (
        <div className='w-10/12 mx-auto text-center my-24'>
            <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Our Best Lawyers</h3>
                <p className='text-sm lg:text-base mt-4 mb-9'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                {
                    lawyersData.map(lawyer => <Lawyer
                        key={lawyer.id}
                        lawyer={lawyer}
                    ></Lawyer>)
                }
            </div>
        </div>
    );
};

export default Lawyers;
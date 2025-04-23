import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyersData }) => {

    const [card, setCard] = useState([]);
    const [cardPerPage, setCardPerPage] = useState(6);
    const [page, setPage] = useState(1)


    useEffect(()=> {

        setCard(lawyersData.slice(0, page * cardPerPage))

    },[page])

    return (
        <div className='w-10/12 mx-auto text-center my-24'>
            <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Our Best Lawyers</h3>
                <p className='text-sm lg:text-base mt-4 mb-9'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16'>
                {
                    card.map(lawyer => <Lawyer
                        key={lawyer.id}
                        lawyer={lawyer}
                    ></Lawyer>)
                }
            </div>
            <button onClick={() => setPage(page + 1)}
                className='btn bg-[#0EA106] text-white font-bold rounded-full p-6 mt-8'>
                {card.length === lawyersData.length ? 'No More Lawyer' : 'Show All Lawyer'}
            </button>
        </div>
    );
};

export default Lawyers;
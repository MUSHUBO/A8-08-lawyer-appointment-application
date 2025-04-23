import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyersData }) => {

    const [card, setCard] = useState([]);
    const [cardPerPage, setCardPerPage] = useState(6);
    const [page, setPage] = useState(1);


    useEffect(() => {

        setCard(lawyersData.slice(0, page * cardPerPage))

    }, [cardPerPage, lawyersData, page, setCardPerPage])

    return (
        <div className='w-10/12 mx-auto text-center'>
            <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Our Best Lawyers</h3>
                <p className='text-sm lg:text-base mt-4 mb-9'>
                    Our best lawyers are highly qualified professionals with deep expertise in various legal fields including corporate law, litigation, and legal consulting. Known for their integrity, dedication, and strategic approach, they consistently deliver outstanding results while prioritizing client satisfaction and ethical practice in every case they handle.
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
            {card.length < lawyersData.length && (
                <button
                    onClick={() => setPage(page + 1)}
                    className='btn bg-[#0EA106] text-white font-bold rounded-full p-6 mt-8'>
                    Show All Lawyer
                </button>
            )}
        </div>
    );
};

export default Lawyers;
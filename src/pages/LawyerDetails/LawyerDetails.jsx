import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { CiSquareAlert } from "react-icons/ci";
import { addToStoredDB } from '../../Utility/AddToDB';


const LawyerDetails = () => {

    const detail = useLoaderData();
    // console.log(detail);

    const { Id } = useParams();
    const newId = parseInt(Id);
    // console.log(newId);

    const lawyer = detail.find(lawyer => lawyer.id == newId);
    // console.log(lawyer);


    const handleBooking = (id) => {
        addToStoredDB(id);
    }

    return (
        <div className='w-10/12 mx-auto mt-8 lg:mb-24'>
            <div className=' text-center bg-[#0F0F0F15] rounded-2xl p-6 lg:p-20'>
                <h1 className='text-3xl font-bold mb-4'>Lawyer’s Profile Details</h1>
                <p>Experienced and dedicated lawyer with expertise in corporate law, litigation, contract negotiation, and legal consulting. Committed to providing strategic legal solutions with professionalism, integrity, and a client-focused approach.</p>
            </div>

            <div className='card card-side bg-base-100 shadow-sm border border-gray-200  p-2 md:p-6 lg:p-10 rounded-2xl my-8 flex-col sm:flex-row'>
                <figure>
                    <img className='rounded-xl w-52 md:w-64 lg:w-80 md:h-64 h-52 lg:h-80' src={lawyer.image} alt="Lawyers-Image" />
                </figure>
                <div className='card-body text-start space-y-0 md:space-y-4'>
                    <div className='flex space-y-2 lg:space-y-0 lg:gap-2 text-center'>
                        <h3 className='bg-[#176AE510] text-[#176AE5] text-xs font-medium px-3 py-2 rounded-full'> {lawyer.experience} </h3>
                    </div>
                    <h2 className="card-title text-xl lg:text-3xl font-bold"> {lawyer.name} </h2>
                    <div className='md:flex w-1/2'>
                        <p className='font-medium text-[#0F0F0F60]'> {lawyer.specialty} </p>
                        <p className='font-medium flex items-center text-[#0F0F0F70] gap-2'> <AiOutlineTrademarkCircle /> License No: {lawyer.licenseNumber} </p>
                    </div>
                    <div className='md:flex gap-4 text-center w-0 font-bold text-[#14141470]'>
                        availability:
                        {
                            lawyer.availability.map((abailabail, index) => <p key={index} className='text-[#FFA000] bg-[#FFA00010] rounded-full px-2 gap-5 font-medium border-2 border-[#FFA00010]'>{abailabail}</p>)
                        }
                    </div>
                    <p className='font-bold text-[#14141470] '>Consultation Fee: <span className='text-[#0EA106]'> Taka : {lawyer.fee} </span></p>
                </div>
            </div>

            <div className='shadow-sm border border-gray-200  p-2 md:p-6 lg:p-10 rounded-2xl'>
                <h1 className='text-center text-xl lg:text-2xl font-bold'>Book an Appointment</h1>
                <p className='border-b border-[#14141460] border-dashed my-4'></p>

                <div className='md:flex justify-between '>
                    <h5 className='font-bold'>Availability</h5>
                    <h5 className='flex font-medium text-[#09982F] bg-[#09982F20] text-xs px-3 py-2 rounded-full'> Lawyer Available Today </h5>
                </div>
                <p className='border-b border-[#14141460] border-dashed my-4'></p>
                
                <h5 className='text-[#FFA000] bg-[#FFA00010] rounded-2xl md:rounded-full px-4 p-1.5 gap-2 font-medium border-2 border-[#FFA00010] flex items-center w-fit mx-auto'> <CiSquareAlert /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</h5>
                
                <button onClick={()=> handleBooking(lawyer.id)} className='w-full mx-auto btn bg-[#0EA106] text-white font-bold rounded-full p-5 px-6 my-10 '>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default LawyerDetails;
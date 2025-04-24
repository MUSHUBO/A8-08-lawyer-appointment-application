import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDetails } from '../../Utility/AddToDB';
import Appointments from '../Appointments/Appointments';

const Booking = () => {

    const [list, setList] = useState([])

    const data = useLoaderData();

    useEffect(() => {
        const storedData = getStoredDetails();
        const appointmentList = data.filter(lawyer => storedData.includes(lawyer.id))
        setList(appointmentList);
    }, [data])
    console.log(list);
    

    const handleCancelAppointment = (idToRemove) => {
        const updatedList = list.filter(appointment => appointment.id !== idToRemove);
        setList(updatedList);
    
        const storedDetails = getStoredDetails();
        const updatedStoredDetails = storedDetails.filter(id => id !== idToRemove);
    
        const data = JSON.stringify(updatedStoredDetails);
        localStorage.setItem('appointmentList', data);
    };

    return (
        <div className='w-10/12 mx-auto my-6 lg:my-20'>
            <div>

            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>My Today Appointments {list.length}</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            <div>
                {
                    list.map(data => <Appointments 
                        key={data.id} 
                        data={data}
                        onCancel={handleCancelAppointment}
                    ></Appointments>)
                }
            </div>
        </div>
    );
};

export default Booking;
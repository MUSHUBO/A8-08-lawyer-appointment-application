import React from 'react';

const Appointments = ({ data, onCancel }) => {
    // console.log(data);

    const { id, name, specialty, fee } = data;

    const handleCancel = () => {
        onCancel(id);
    };

    return (
        <div className='card card-side bg-base-100 shadow-sm border border-gray-200 rounded-2xl p-2 md:p-4 lg:p-8 my-6 md:my-11 lg:my-16 flex flex-col'>
            <div className='sm:flex items-center justify-between'>
                <div>
                    <h2 className="card-title text-xl font-bold"> {name} </h2>
                    <p className='font-medium text-[#0F0F0F60]'> {specialty} </p>
                </div>
                <div>
                    <p className='font-bold text-[#14141470] '>
                        Appointments  Fee: <span className='text-[#0EA106]'>   {fee} Taka</span>
                    </p>
                </div>
            </div>

            <p className='border-b border-[#14141460] border-dashed my-4'></p>
            <button onClick={handleCancel} className='btn btn-outline btn-error w-full font-semibold text-lg rounded-full'>
                Cancel Appointment
            </button>
        </div>
    );
};

export default Appointments;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServicesData(data);
            });
    }, []);

    return (
        <div className='w-10/12 mx-auto text-center my-28'>
            <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>We Provide Best Law Services</h3>
                <p className='text-sm lg:text-base mt-4 mb-9'>
                We provide the best law services through a team of expert and dedicated lawyers. Specializing in corporate law, litigation, contract drafting, and legal consulting, we focus on delivering effective, client-oriented solutions. Our commitment to professionalism and integrity ensures reliable representation and successful outcomes for individuals and businesses alike.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
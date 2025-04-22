import React from 'react';
import Banner from '../../components/Banner/Banner';
import BestLawyers from '../BestLawyers/BestLawyers';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router';

const Home = () => {

    const servicesData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <BestLawyers></BestLawyers>
            <Services servicesData={servicesData}></Services>
        </div>
    );
};

export default Home;
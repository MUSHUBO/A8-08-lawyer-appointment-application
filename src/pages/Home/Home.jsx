import React from 'react';
import Banner from '../../components/Banner/Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import Services from '../Services/Services';

const Home = () => {

    const lawyersData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Lawyers lawyersData={lawyersData}></Lawyers>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {

    const lawyersData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Lawyers lawyersData={lawyersData}></Lawyers>
        </div>
    );
};

export default Home;
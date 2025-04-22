import React from 'react';
import bannerImg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto'>
            <img src={bannerImg} alt="banner-image" className='relative rounded-3xl'/>
            <div className='mx-auto absolute bottom-[250px] sm:bottom-[200px] md:bottom-[180px] lg:bottom-1/4   left-[120px] md:left-[160px] lg:left-[150px] xl:left-1/6 space-y-4'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl text-white font-medium'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h3>

                <p className='text-xs md:text-sm lg:text-base text-gray-300'>Our platform connects you with verified, experienced doctors across various <br className='xl:hidden'/> specialties — all at your convenience. Whether it's a <br/> routine checkup or urgent consultation, book appointments in minutes and <br className='xl:hidden'/> receive quality care you can trust.</p>
            </div>
        </div>
    );
};

export default Banner;
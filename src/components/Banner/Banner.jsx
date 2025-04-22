import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mb-28'>
            <div
                className="hero w-full min-h-[550px] mx-auto rounded-3xl"
                style={{ backgroundImage: "url(https://i.ibb.co.com/8nB8Vdpf/banner-img-1.png)",
                }}>
                    
                <div className="hero-content text-white text-center">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                        <p className="mb-5 text-xs md:text-sm lg:text-base">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
                            Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
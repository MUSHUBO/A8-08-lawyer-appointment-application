import React from 'react';

const Error = () => {
    return (
        <div className='text-center'>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#e4f0f5] to-white px-4">
                <img src="https://i.ibb.co.com/WWJHs4ZS/vecteezy-internet-network-warning-404-error-page-or-file-not-found-5084699.jpg"
                    alt="404 robot" className="w-1/3 h-auto mb-6 rounded-xl shadow-2xl" />

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-pink-500 mb-2">404 - Page Not Found</h1>
                    <p className="text-gray-700 mb-6">
                        Oops! The page you're looking for doesn't exist.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Error;
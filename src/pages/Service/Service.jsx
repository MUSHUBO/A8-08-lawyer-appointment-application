import React, { useEffect, useRef, useState, } from 'react';
import CountUp from 'react-countup';

const Service = ({ service }) => {
  // console.log(service);
  const {icon, number, title} = service;

  const [key, setKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKey((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);


  return (
    <div ref={ref} className="bg-[#0F0F0F15] rounded-2xl p-10 text-start space-y-4">
      <img className="w-15 h-15" src={icon} alt="Service Icon" />
      <h1 className="text-5xl font-bold">
        <CountUp key={key} start={0} end={number} duration={2.5} />+
      </h1>
      <h5 className="text-xl text-[#0F0F0F99]">{title}</h5>
    </div>
  );
};

export default Service;

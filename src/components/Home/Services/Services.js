import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/getAllServices')
      .then(response => response.json())
      .then(result => setServices(result));
  }, []);
  return (
    <>
      <h2 className="text-center my-5">Provide awesome <span style={{ color: '#9bc582' }}>services</span></h2>
      <div className="row">
        {
          services.map(service => <Service service={service} key={service._id}></Service>)
        }
      </div>
    </>
  );
};

export default Services;
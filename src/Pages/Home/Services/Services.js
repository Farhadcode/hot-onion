import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './../Service/Service';



const Services = () => {

    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Farhadcode/doctor-portal-data/main/hot-onion-data/data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <>
            {
                service.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </>
    );
};

export default Services;
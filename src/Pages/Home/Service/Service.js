import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // console.log({ service });
    const { name, img, price, category } = service;

    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{category}</small></p>
            <p>${price}</p>
        </div>
    );
};

export default Service;
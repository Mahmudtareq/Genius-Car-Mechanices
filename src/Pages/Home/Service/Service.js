import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, id, description, img, price } = service;
    return (
        <div className="service m-3 pb-3">

            <img width="400" height="300" src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>

            </Link>

        </div>
    );
};

export default Service;
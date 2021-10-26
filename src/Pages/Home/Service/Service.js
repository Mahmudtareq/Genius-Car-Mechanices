import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { Name, _id, description, img, price } = service;
    return (
        <div className="service m-3 pb-3">

            <img width="400" height="300" src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price : {price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {Name.toLowerCase()}</button>

            </Link>

        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const { serviceId } = useParams();
    const [service , setService] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${ serviceId}`)
        .then(res =>res.json())
        .then(data =>setService(data));
    },[])

    return (
        <div>
            <h2>Details of : {service.Name}</h2>
            <img className="img-fluid" width="430" src={service.img} alt="" />
            <p>{service.description}</p>
            {/* <h2>This is Booking : {serviceId}</h2> */}
        </div>
    );
};

export default Booking;
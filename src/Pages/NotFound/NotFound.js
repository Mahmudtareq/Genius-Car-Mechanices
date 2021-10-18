import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../image/404/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img width="80%" src={notfound} alt="" />
            <br />
            <Link to="/home"><button className="btn btn-primary">Go Back</button></Link>

        </div>
    );
};

export default NotFound;
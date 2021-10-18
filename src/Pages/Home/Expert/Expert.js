import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-md-6 col-12 ">
            <img width="350" height="400" src={img} alt="" />
            <h4>{name}</h4>
            <h5 className="text-danger">{expertize}</h5>

        </div>
    );
};

export default Expert;
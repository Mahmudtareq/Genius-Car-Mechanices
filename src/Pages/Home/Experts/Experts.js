import React from 'react';
import mechanic1 from '../../../image/mechanic/mechanic1.jpg'
import mechanic2 from '../../../image/mechanic/mechanic2.jpg'
import mechanic3 from '../../../image/mechanic/mechanic3.jpg'
import mechanic4 from '../../../image/mechanic/mechanic4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert'
    },
    {
        img: mechanic2,
        name: 'john Anderson',
        expertize: '-Polish Expert'

    },
    {
        img: mechanic3,
        name: ' Anderson Smith',
        expertize: '-Hardware Expert'

    },
    {
        img: mechanic4,
        name: 'John Smith',
        expertize: '-Machine Expert'

    },
]


const Experts = () => {
    return (
        <div id="experts" className="container  my-5">
            <h2 className="text-primary mb-3">Our Experts </h2>
            <div className="row g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }

            </div>

        </div>
    );
};

export default Experts;
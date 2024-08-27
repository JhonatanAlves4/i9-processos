
import Image from 'next/image';
import React from 'react';

const Card = ({imageUrl }) => {
    return (
        <div className="partners-div">
            <Image src={imageUrl} alt='company' width={68} height={68} className="card-size" />
        </div>
    );
};

export default Card;


import Image from 'next/image';
import React from 'react';

const Card = ({imageUrl }) => {
    return (
        <div className="">
            <Image src={imageUrl} alt='company' width={98} height={98} className="h-40 w-40" />
        </div>
    );
};

export default Card;

import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const data =useLoaderData()
    const {id} = useParams()
    const singlePhone  =  data.find(phone => phone.id === parseInt(id))
    const { name, image, description } = singlePhone;
    console.log(singlePhone)
    return (
        <div>
            {name}
        </div>
    );
};

export default PhoneDetails;
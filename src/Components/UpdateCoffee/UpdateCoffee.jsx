import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const UpdateCoffee = () => {
    const coffees = useLoaderData()
    return (
        <div className='bg-gradient-to-tr from-red-950 to-black'>
            <h1 className='text-3xl font-bold font-serif text-center text-white pt-8'>Total Added Coffees = {coffees.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 m-12'>
                {
                    coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default UpdateCoffee;
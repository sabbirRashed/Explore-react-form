import React from 'react';
import Dad from './Dad';
import Auncle from './Auncle';
import Aunt from './Aunt';

const GrandPa = () => {
    const assets = 'diamond';
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
            <Dad assets={assets}></Dad>
            <Auncle></Auncle>
            <Aunt assets={assets}></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;
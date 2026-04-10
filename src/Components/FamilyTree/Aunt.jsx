import React from 'react';
import TomTom from './TomTom';
import JoJoo from './JoJoo';

const Aunt = ({assets}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <TomTom assets={assets}></TomTom>
                <JoJoo></JoJoo>
            </section>
        </div>
    );
};

export default Aunt;
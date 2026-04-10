import React from 'react';
import Rafsu from './Rafsu';
import Jupshu from './Jupshu';

const Auncle = () => {
    return (
        <div>
            <h3>Auncle</h3>
            <section className='flex'>
                <Rafsu></Rafsu>
                <Jupshu></Jupshu>
            </section>
        </div>
    );
};

export default Auncle;
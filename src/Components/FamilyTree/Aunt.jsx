import React, { use } from 'react';
import TomTom from './TomTom';
import JoJoo from './JoJoo';
import { MoneyContext } from './FamilyTree';

const Aunt = ({assets}) => {
    const [money, setMoney] =use(MoneyContext);

    const handleBtn = ()=>{
        setMoney(money + 500);
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <TomTom assets={assets}></TomTom>
                <JoJoo></JoJoo>
            </section>
            <button onClick={handleBtn} style={{width: '100%', padding: "5px"}}>Add Money</button>
        </div>
    );
};

export default Aunt;
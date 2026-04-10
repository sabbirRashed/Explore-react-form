import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './familyTree.css';

export const AssetContext = createContext('');
export const MoneyContext = createContext('');

const FamilyTree = () => {
    const [money, setMoney] = useState(0);
    const assets = 'diamond';
    const newAsset = "Gold"

    return (
        <div>
            <h2>Family Tree</h2>
            <p>Total family money: {money}</p>
            <section>
                <MoneyContext value={[money, setMoney]}>
                    <AssetContext.Provider value={newAsset}>
                        <GrandPa assets={assets}></GrandPa>
                    </AssetContext.Provider>
                </MoneyContext>
            </section>
        </div>
    );
};

export default FamilyTree;
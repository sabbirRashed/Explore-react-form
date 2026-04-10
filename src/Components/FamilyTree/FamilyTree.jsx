import React from 'react';
import GrandPa from './GrandPa';
import './familyTree.css';

const FamilyTree = () => {
    return (
        <div>
            <h2>Family Tree</h2>
            <section>
                <GrandPa></GrandPa>
            </section>
        </div>
    );
};

export default FamilyTree;
import React from 'react';
import MyFriend from './MyFriend';

const Myself = ({assets}) => {
    return (
        <div>
            <h3>Myself</h3>
            <MyFriend assets={assets}></MyFriend>
        </div>
    );
};

export default Myself;
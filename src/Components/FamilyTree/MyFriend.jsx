import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const MyFriend = ({assets}) => {
    const newAsset = useContext(AssetContext);
    console.log('newassets', newAsset);
    return (
        <div>
            <h3>My friend</h3>
            <p>assets: {assets}</p>
            <p>newAsset: {newAsset}</p>
        </div>
    );
};

export default MyFriend;
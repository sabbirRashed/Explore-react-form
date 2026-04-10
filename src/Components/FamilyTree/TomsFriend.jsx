import React, { use } from 'react';
import { AssetContext } from './FamilyTree';

const TomsFriend = ({assets}) => {
    const newAsset = use(AssetContext);

    return (
        <div>
            <h3>Friend</h3>
            <p>assets: {assets}</p>
            <p>newAsset: {newAsset}</p>
        </div>
    );
};

export default TomsFriend;
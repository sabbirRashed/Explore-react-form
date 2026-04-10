import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const JojoFriend = () => {
    const [money, ] =use(MoneyContext);

    return (
        <div>
            <h3>Friend</h3>
            <p>Family got: {money}</p>
        </div>
    );
};

export default JojoFriend;
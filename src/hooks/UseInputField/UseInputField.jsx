import React, { useState } from 'react';

const UseInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleInputFieldValue = (e) =>{
            setFieldValue(e.target.value);
    }

    return [fieldValue, handleInputFieldValue];
};

export default UseInputField;
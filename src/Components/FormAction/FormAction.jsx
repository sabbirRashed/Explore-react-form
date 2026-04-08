import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData)=>{
        console.log(formData.get.name);
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="name" id="" placeholder='name' />
                <input type="email" name="email" id="" placeholder='email' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;
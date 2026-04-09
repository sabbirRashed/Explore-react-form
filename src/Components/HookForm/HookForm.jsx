import React from 'react';
import UseInputField from '../../hooks/UseInputField/UseInputField';

const HookForm = () => {
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');
    const [name, nameOnChange] = UseInputField('');
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submited", email, password, name);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' onChange={emailOnChange} /><br />
                <input type="password" name="password" onChange={passwordOnChange} /><br />
                <input type="text" name="name" placeholder='name' onChange={nameOnChange} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
import React, { useState } from 'react';

const ControledFiled = () => {
    const [password, setPassword] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(e.target.email.value)
    }

    const handleOnChangePassword = (e) =>{
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' id="" /><br />
                <input type="email" name="email" placeholder='email' required id="" /><br />
                <input type="password" name="password" placeholder='password' onChange={handleOnChangePassword} defaultValue={password} required id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControledFiled;
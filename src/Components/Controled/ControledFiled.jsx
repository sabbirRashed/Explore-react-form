import React, { useState } from 'react';

const ControledFiled = () => {
    const [name, setName] = useState('');
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e.target.email.value)
        // console.log(password);
        if (password.length < 8) {
            setError("Password be taken at least 8 carrecter");
        }
        else {
            setError("")
        }
    }

    const handleOnchangeName = (e) =>{
        setName(e.target.value);
        console.log(name);
        
    }

    const handleOnChangeEmail =(e)=>{
        setEmail(e.target.value);
        console.log(email);
        
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
        // if (password.length < 8) {
        //     setError("Password be taken at least 8 carrecter");
        // }
        // else {
        //     setError("")
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' onChange={handleOnchangeName} /><br />
                <input type="email" name="email" placeholder='email' onChange={handleOnChangeEmail} defaultValue={email} required /><br />
                <input type="password" name="password" placeholder='password' onChange={handleOnChangePassword} defaultValue={password} required id="" /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: "red" }}>{error}</p>
        </div>
    );
};

export default ControledFiled;
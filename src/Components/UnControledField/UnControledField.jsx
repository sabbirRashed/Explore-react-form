import React, { useRef } from 'react';

const UnControledField = () => {
    const passwordRef = useRef('');
    const emailRef = useRef('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(passwordRef.current.value);
        console.log(emailRef.current.value);
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" /><br />
                <input ref={passwordRef} type="password" name="password"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControledField;
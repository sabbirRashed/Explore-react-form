import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.submit.value);
    }

    return (
        <div>
            <h2>Simple form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="submit" name='submit'/><br />
            </form>
        </div>
    );
};

export default SimpleForm;
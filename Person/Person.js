import React from 'react';

const Person =(props) =>{

    return(
    <div>

        <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old. Dummy change </p>   
        <p>{props.children}</p>

    </div>
    );
};

export default Person;
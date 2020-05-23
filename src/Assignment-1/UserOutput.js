import React from 'react';
import './UserOutput.css';

const UserOutput =(props) => {
    const inputStyle = {
        border: '2px solid red'
    };
    return(
<div 

style={inputStyle}>Hello User Output

    <p> Name: {props.name}</p>
    <p> Para 2</p>
</div>

    );
};

export default UserOutput;
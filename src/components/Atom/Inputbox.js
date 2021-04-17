import React, {useState, useReducer} from 'react';

export const Inputbox = ({ type, name, ref, placeholder }) => {
    
    

    return (
    <>
            <input type='text' id={type} name={name} ref={ref} className='commonInput' placeholder={placeholder} />
    </>
    )
}
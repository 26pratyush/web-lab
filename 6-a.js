//Write an REACT program which accepts the Name from the form. 
//As you type, it updates the Name in the page with an hl tag.

import React, { useState } from 'react';

function NameUpdater() 
{
  const [name, setName] = useState('');
  //Handle the chnage in the input field
  const handleChange = (event) => 
    {
    setName(event.target.value);
    }

  return (
    <div>
      <h1>Real-time Name Updater</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name" 
      />
      <h2>{name}</h2>
    </div>
  );
}

export default NameUpdater;


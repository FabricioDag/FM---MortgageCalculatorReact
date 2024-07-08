import './Inputbox.css';

import { useState } from 'react';

const Inputbox = ({ title, type, tag, func }) => {

  const [selected, setSelected] = useState(false)
  const [t, setT] = useState('')

  const handleFocus = ( ) =>{
    setSelected(true)
  }

  const handleBlur = ( ) =>{
    setSelected(false)
  }

  const handleChange = (e) =>{
    func(e.target.value)
  }
  return (
    <>
      <label className="inputTitle">{title}</label>
      <div className={`Inputbox ${type} ${selected}`}>
        <div className={`tagInput ${selected}`}>{tag}</div>
        <input className='inputT' type="number" onFocus={handleFocus}
        onBlur={handleBlur} onChange={handleChange}/>
      </div>

       
    </>
  );
};

export { Inputbox };

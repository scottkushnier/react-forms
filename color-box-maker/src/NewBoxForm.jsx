
import { useState } from 'react';
  
const initialFormData = {color:'white', height: 30, width: 30};

function NewBoxForm({AddFn}) {
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (evt) => {
        evt.preventDefault();
        const {name, value} = evt.target;
        setFormData(formData => ({...formData, [name]:value}));
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        AddFn(formData);
        setFormData(initialFormData);
    }
    return (
        <form>
            <br/>
            New Block
            <br/>       
            <label htmlFor='color'>Color: </label>
            <input id='color' name='color' value={formData.color} onChange={handleChange}/>   
            <br/>       
            <label htmlFor='height'>Height: </label>
            <input id='height' name='height' value={formData.height} onChange={handleChange}/>
            <br/>       
            <label htmlFor='width'>Width: </label>
            <input id='width' name='width' value={formData.width} onChange={handleChange}/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default NewBoxForm;
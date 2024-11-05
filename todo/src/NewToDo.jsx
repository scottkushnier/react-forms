
import { useState } from 'react';
  
const initialFormData = {text: ''};

function NewToDo({AddFn}) {
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
        <form onSubmit={handleSubmit} data-testid="form">
            <br/> 
            <label htmlFor='item'>New Item: </label>
            <input id='item' name='text' value={formData.text} onChange={handleChange}/>    
        </form>
    )
}

export default NewToDo;
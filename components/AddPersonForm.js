import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPerson } from '../actions'

function AddPersonForm(props) {
  const [person, setPerson] = useState('');
  const [age, setAge] = useState();

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleChangeAge(e){
    setAge(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '' && age !== '') {
      props.addPerson(person, age);
      setPerson('');
      setAge('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Persona" 
        onChange={handleChange} 
        value={person} />
        <input type="text" 
        placeholder="Edad" 
        onChange={handleChangeAge} 
        value={age} />
      <button type="submit">Add</button>
    </form>
  );
}

const mapDipatchToProps = {
  addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)
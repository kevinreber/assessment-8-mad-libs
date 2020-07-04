import React, {useState} from 'react';
import './App.css';

function App() {
  /** Initial empty state for formData */
  const INITIAL_STATE = {
    noun1: "",
    noun2: "",
    adjective: "",
    color: ""
  };

  /** 'showForm' state will be used as a boolean to toggle what to display on screen */
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState(INITIAL_STATE)

  /** handle when a form change is made, to update state of values */
  const handleChange = (e) =>{
    // de-structure 'e.target'
    const {name, value} = e.target;    
    // update data in 'fData'
    setFormData( fData => ({...fData, [name]: value}));    
  }

  /** Verifies each field user entered into form */
  const handleSubmit = () => {
    // place holder boolean
    let errors = false;
    
    /** Verify each field in formData is not empty */
    for(let val in formData){      
      const v = formData[val].trim();
      
      // if a field is empty, show form and flag error
      if (!v){
        setShowForm(true);
        errors = true;
      }
    }

    // throw alert if errors
    if (errors) {
      alert("Missing Required Data!");
    }
  }

  /** toggle the form's state */
  const toggleForm = (e) =>{
    e.preventDefault();
    setShowForm(f => !f);

    // verify user's input
    if(showForm){
      handleSubmit()
    }
    // If user is restarting Mad Lib, reset formData
    if(!showForm){
      setFormData(INITIAL_STATE)
    }    
  }

  /** Mad Lib message to display if 'formData' is verified */
  const message = (
    <h2>There was a {formData.color} {formData.noun1} who loved a {formData.adjective} {formData.noun2}</h2>
  )

  return (
    <div className="App">
    <header>
      <h1>Madlibs!</h1>
    </header>
    <form>
    {/* Show form or Mad Lib message depending on 'showForm' state */}
      { showForm ? 
      ( 
        <>   
        <input onChange={handleChange} required value={formData.noun1} name="noun1" placeholder="Noun*"/>
        <input onChange={handleChange} required value={formData.noun2} name="noun2" placeholder="Noun 2*"/>
        <input onChange={handleChange} required value={formData.adjective} name="adjective" placeholder="Adjective*"/>
        <input onChange={handleChange} required value={formData.color} name="color" placeholder="Color*"/>
        </>
      )
        :
        message
      }

      <button
        onClick={toggleForm}>
          { showForm ? 'Get Story' : 'Restart'}
      </button>
    </form>

    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);

  // useEffect(() =>{
    

  // },[])

  const toggleForm = (e) =>{
    e.preventDefault();
    setShowForm(f => !f);    
  }

  return (
    <div className="App">
    <header>
      <h1>Madlibs!</h1>
    </header>
    <form>
      { showForm ? 
      ( 
        <>   
        <input name="noun-1" placeholder="noun"/>
        <input name="noun-2" placeholder="noun 2"/>
        <input name="adjective" placeholder="adjective"/>
        <input name="color" placeholder="color"/>
        </>
      )
        :
        (<h2>hello</h2>)
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

import { useState } from 'react';
import FormData from 'form-data';

function App() {

  const [file, setFile] = useState()

  const handleFile=(fileToHandle)=>{

    // initialize the form data
    const formData = new FormData()

    // append the form data to 

    
  }

  return (
    <div className="App">
      <input type="file" onChange={(event)=>setFile(event.target.files[0])}/>
      <button onClick={()=>handleFile(file)}>Pin</button>
    </div>
  );
}

export default App;

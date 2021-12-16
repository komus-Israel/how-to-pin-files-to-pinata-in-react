import { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';


function App() {

  const [file, setFile] = useState()
  const [myipfsHash, setIPFSHASH] = useState('')
  const ipfsBASEURL = "https://gateway.pinata.cloud/ipfs/"

  const handleFile=(fileToHandle) =>{

    

    console.log('starting')

    // initialize the form data
    const formData = new FormData()

    // append the file form data to 
    formData.append("file", fileToHandle)

    // call the keys from .env

    const API_KEY = process.env.REACT_APP_API_KEY
    const API_SECRET = process.env.REACT_APP_API_SECRET

    // the endpoint needed to upload the file
    const url =  `https://api.pinata.cloud/pinning/pinFileToIPFS`

    axios.post(
      url,
      formData,
      {
          maxContentLength: "Infinity",
          headers: {
              "Content-Type": `multipart/form-data;boundary=${formData._boundary}`, 
              'pinata_api_key': API_KEY,
              'pinata_secret_api_key': API_SECRET

          }
      }
  ).then(
    data=>{
      console.log(data)
      setIPFSHASH(data.data.IpfsHash)
    }
  )

  //console.log(myipfsHash)
    

  

  
  }

  

  return (
    <div className="App">
      <input type="file" onChange={(event)=>setFile(event.target.files[0])}/>
      <button onClick={()=>handleFile(file)}>Pin</button>
      
      
    {
      myipfsHash.length > 0 && <img src={`https://gateway.pinata.cloud/ipfs/${myipfsHash}`} alt='not loading'/>
    }
    
        
        
     

      

    
    </div>
  );
}

export default App;

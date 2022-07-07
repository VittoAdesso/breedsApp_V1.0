import React, {useState, useEffect} from 'react'
import getBreeds from '../../helper/getBreeds';

import NavBar from './../NavBar/NavBar';

const DogsSelect = ( { updateDogImage }) => {

  const [breeds , setBreeds] = useState([]); 
  useEffect(()=> {
  updateBreeds(); 
  }, []); 

  const updateBreeds = () => {
    getBreeds()
    .then((newBreeds) => {
      setBreeds(newBreeds); 
    })
  }
  return (      
    <>
    <NavBar></NavBar>
      <select 
      onChange={(e)=> updateDogImage(e.target.value) }>

      { breeds.map(breed => (
      <option
      value={breed.id} 
      key={breed.id} 
      style={{background:'whitesmoke'}}> 
      {breed.name} 
      </option>
      ))}
     </select>

    </>
  )
}

export default DogsSelect; 
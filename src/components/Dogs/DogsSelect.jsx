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

          {/* mapeo el array de objetos, que quiero que me devuelva resultados por cada vuelta  */}
          {/* recuerda que estoy mapeando el valor de breeds, y cuando entra en el array de objetos, siempre llamo breeds. su isElementOfType. Ojo! Recuerda ponerl la key, que será lo que le diferenciará del resto de selecciones   */}

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
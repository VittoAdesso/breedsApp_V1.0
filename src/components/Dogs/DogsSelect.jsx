import React, {useState, useEffect} from 'react'
import getBreeds from '../../helper/getBreeds';

import NavBar from './../NavBar/NavBar';

//1 / prop function
const DogsSelect = ( { updateDogImage }) => {

  //created state
  const [breeds , setBreeds] = useState([]); 


  //3 created 
  useEffect(()=> {
    // included function that i created in step 2 
  updateBreeds(); 
  }, []); 


//2 action and function
  const updateBreeds = () => {
    // llamo a getbreds mi async await
    getBreeds()
    // le paso por argumento nuevas razas  y que me lo cargue en esl estado setBreeds.
    .then((newBreeds) => {
      setBreeds(newBreeds); 
    })
  }
  return (      
    <>
    <NavBar></NavBar>
        
          
        {/* // 4 pass into props to select name with picture */}
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
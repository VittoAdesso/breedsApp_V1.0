import React, { useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import DogsSelect from './components/Dogs/DogsSelect';
import CarDogs from './components/CarDogs/CarDogs';
import getDogImages from './helper/getDogImages';
import ImagesDogs from './components/ImagesDogs/ImagesDogs';

import Home from './components/Home/Home';

const initialDog = {
  image: "", 
  breed: {
    id: "", 
    name: "", 
  }
}

function App() {
  const [ dog, setDog] = useState(initialDog); 
 
  const updateDogImage = (breedId) => {
    getDogImages(breedId)
    .then((newDog) => {
    setDog(newDog); 
    })
  }

  useEffect(() => {
    updateDogImage(); 
  }, [] ); 
    
  return (
    <>
      <Routes>
        <Route path="/" element={  <Home /> }/> 
        <Route path="/select" element={ 
          <div className="app">
          <DogsSelect updateDogImage={ updateDogImage }/>
          <CarDogs dog={ dog } />
          </div> }/>
        <Route path="/breeds" element={ <div> <ImagesDogs  /> </div>} /> 
      </Routes>
      </>
  );
}

export default App;

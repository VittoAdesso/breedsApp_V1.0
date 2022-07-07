import React, {useState, useEffect} from 'react'
import  './styles.scss'; 
import NavBar from './../NavBar/NavBar';

const PruebaApi = () => {
const [image , setImage ] = useState([]); 

useEffect(() => {
        fetch('https://api.thedogapi.com/v1/images/search?limit=20')
          .then(res => res.json())
          .then((imagenes) =>{
          setImage(imagenes);
          })
    }, [])

  return (
    <>
      <NavBar></NavBar>
        <div className='listImages'>
          <ul> 
            { image.map( (picture) => { return (
              < img src={ picture.url } 
              alt='hola' /> 
            )
            })} 
          </ul>
        </div>
    </>
  )
}

export default PruebaApi; 

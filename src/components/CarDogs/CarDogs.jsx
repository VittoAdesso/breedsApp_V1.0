const CarDogs = ( { dog }) => {

  return (
    <div className="card">
      <img 
        src={ dog.image}
        alt="dog"
      />
      <p>
      {dog.breed.name}
      </p>
    </div>
  )
}

export default CarDogs; 
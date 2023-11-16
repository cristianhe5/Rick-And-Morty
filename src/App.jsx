import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import InfoLocation from './components/InfoLocation'
import CardResident from './components/CardResident'

function App() {

  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1)

  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isLoading, hasError] = useFetch(url)// location es un objeto

  useEffect(() => {
    getLocation()
  }, [locationId])

  const inputLocation = useRef()

  const handleLocation = e => {
    e.preventDefault()
    const inputValue = inputLocation.current.value.trim()
    if(inputValue.length > 0){
      setLocationId(inputValue)
    }
    inputLocation.current.value = ''
  }

  





  return (
    <div className='app'>
      <div className='app__container-img'>
        
      </div>
      <h1 className='app__title'><img className='title__img' src="../image2.png" alt="" /></h1>
      <form className='app__form' onSubmit={handleLocation}>
        <input className='app__input' type="text" ref={inputLocation} />
        <button className='app__btn'>Search</button>
      </form>
      {
        isLoading ? <h2 className='app__h2' >Loading...</h2>
          : (

            hasError || locationId === '0' ? <h2>❌ Hey! you must provide an id from 1 to 126</h2>
              : (

                
                <>
                  <InfoLocation location={location} />

                  <div className='app__card-container'>
                    {
                      location?.residents.map(url => ( //dont forget the parentesis here works like a  return
                        < CardResident
                          key={url}
                          url={url}
                        />
                      ))
                    }
                  </div>
                </>
              )
          )
      }
    </div>
  )
}

export default App

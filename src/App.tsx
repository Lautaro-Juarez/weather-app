import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { FavouritesProvider } from './components/Header/context/FavouritesContext';
import { LayOut } from './layout/LayOut';

function App() {

  const [hour, setHour] = useState('')

  const getHour = () => {
    let date = new Date()

    let hh = date.getHours().toString().padStart(2, '0'),
      mm = date.getMinutes().toString().padStart(2, '0')

    setHour(`${hh}:${mm}`)
  }
  setInterval(getHour, 60000)

  useEffect(() => { getHour() }, [])
  
  return (
    <div className="app_container">
      <FavouritesProvider>
        <Header />
      </FavouritesProvider>
      <h2 style={{ marginRight: '10vw', color: 'white', fontWeight: '500', textAlign: 'right', textDecoration: 'underline', opacity: '.6' }}>{hour} hs.</h2>
      <LayOut />
    </div>
  )
}

export default App

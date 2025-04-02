import { useState } from 'react'
import { Navbar } from './components/Navbar'
import Home from './components/home'

function App() {

  const [mode, setMode] = useState(null);

  function toggle (){
    if(mode === 'light'){
      setMode('gray');
    }else{
      setMode('light');
    }
  }

  return (
    <>
      <Navbar mode={mode} toggle={toggle}/>
      <Home mode={mode}/>
    </>
  )
}

export default App

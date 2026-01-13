import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Header.tsx'
import Profile from './Profile.tsx'
import Contact from './Contact.tsx'
import Work from './Work.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Profile />
    <Contact />
    <Work />
    </>
  )
}

export default App

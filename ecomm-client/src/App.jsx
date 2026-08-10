import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductSection from './components/productSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to ecomm portal</h1>
     <ProductSection />
    </>
  )
}

export default App

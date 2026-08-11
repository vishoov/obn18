import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductSection from './components/productSection';
import {Routes, Route} from 'react-router'
import HomePage from './components/HomePage';
import SingleProduct from './components/SingleProduct'
import SignupPage from './components/SignupPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='shopAll' element={<ProductSection/>} />
      <Route path="product" element={<SingleProduct />} />
      {/* login */}
      {/* signup */}
    <Route path='signup' element={<SignupPage />} />
    </Routes>

     {/* <ProductSection /> */}
    </>
  )
}

export default App

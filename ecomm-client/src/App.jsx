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
import StarElement from './components/StarElement'
import Layout from './components/Layout';
import MenDenims from './components/MenDenims'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="*" element={<StarElement />}/>
      <Route index element={<HomePage />} />
      <Route path='shopAll' element={<ProductSection/>} />
      <Route path="product/:id" element={<SingleProduct />} />
      <Route path="collection" element={<Layout />}>
        <Route path="mens-collection" element={<MenDenims/>} />
      </Route>

      {/* login */}
      {/* signup */}
    <Route path='signup' element={<SignupPage />} />
    </Routes>

     {/* <ProductSection /> */}
    </>
  )
}

export default App

import './App.css'
import { Routes, Route } from 'react-router'
import ProductSection from './components/productSection'
import HomePage from './components/HomePage'
import SingleProduct from './components/SingleProduct'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import StarElement from './components/StarElement'
import Layout from './components/Layout'
import CollectionIndex from './components/CollectionIndex'
import MenDenims from './components/MenDenims'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { AuthProvider } from './auth/AuthContext'

function App() {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shopAll" element={<ProductSection />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="collection" element={<Layout />}>
          <Route index element={<CollectionIndex />} />
          <Route path="mens-collection" element={<MenDenims />} />
        </Route>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<StarElement />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </>
  )
}

export default App

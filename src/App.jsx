import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'  


export const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer /> 
    </main>
  )
}

export default App

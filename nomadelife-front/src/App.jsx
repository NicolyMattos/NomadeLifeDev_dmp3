import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatPost from './pages/CreatePost/CreatePost'

function App() {
  return (
    <>
      <NavBar />
      <CreatPost/>
      <Footer />
    </>
  )
}

export default App

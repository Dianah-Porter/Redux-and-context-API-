import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
   <div className='flex flex-col items-center'>
    <Profile/>
    <Login/>
   </div>
  )
}

export default App;

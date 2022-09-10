import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Login } from '../pages/Login'
import { Top10 } from '../pages/Top10'
import { Trending } from '../pages/Trending'
import { Home } from '../pages/Home'
export const AppRoutes = () => {
  return (
    <>
    
     <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/top10' element={<Top10/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<Home/>}/>

    </Routes>
    </>
  )
}

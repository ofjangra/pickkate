import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Colors from './Colors';
import Fonts from './Fonts';
import FontPairs from './FontPairs';
const App = () => {
  return (
      <>
      <Routes>
          <Route path='/' element = {<Home/>}>

          </Route>
          <Route exact path = '/colors' element = {<Colors/>}></Route>
          <Route path = '/fonts' element = {<Fonts/>}></Route>
          <Route path = '/fontpairs' element = {<FontPairs/>}></Route>

          </Routes>
      </>
  )
}

export default App
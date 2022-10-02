import React, { Component, useCallback } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import NewsItem from './Component/NewsItem'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

export default class App extends Component {
  c="joy"
  render() {
    return (
      <>
       <BrowserRouter>
      <Navbar />
      
        <Routes>
          {/* <Route path="/science " element={<News pagesize={9} country="us" catagory="science"/>} /> */}
          {/* <Route path="/About" element={<News pagesize={9} country="us" catagory="science"/>} /> */}

        <Route exact path="/general" element={<News key="general" pagesize={9} country="in" category="general" />}/>
        <Route exact path="/business" element={<News key="bussiness" pagesize={9} country="in" category="business" />}/>
        <Route exact path="/health" element={<News key="health" pagesize={9} country="in" category="health" />}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pagesize={9} country="in" category="entertainment" />}/>
        <Route exact path="/sports" element={<News key="sports" pagesize={9} country="in" category="sports" />}/>
        <Route exact path="/science" element={<News key="science" pagesize={9} country="in" category="science" />}/>
        <Route exact path="/technology" element={<News key="tecnology" pagesize={9} country="in" category="technology" />}/>
        </Routes>
      

       </BrowserRouter>
      </>
      
    )
  }
}

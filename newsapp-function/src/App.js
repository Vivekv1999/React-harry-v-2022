import React, { Component, useCallback, useState } from 'react'
import Navbar from './news-function/Navbar'
import News from './news-function/News'
import NewsItem from './news-function/NewsItem'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App () {
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress,setprogress]=useState(0)
  // state = {
  //   progress: 0
  // }
  // setprogress = (progressgg) => {
  //   setState({ progress: progressgg })
  // }

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            hight={3}
          // onLoaderFinished={() => setProgress(0)}
           />

          <Routes> 
            {/* <Route path="/science " element={<News pagesize={9} country="us" catagory="science"/>} />
            <Route path="/About" element={<News pagesize={9} country="us" catagory="science"/>} /> */}

            <Route exact path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={9} country="in" category="general" />} />
            <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key="bussiness" pagesize={9} country="in" category="business" />} />
            <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={9} country="in" category="health" />} />
            <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={9} country="in" category="entertainment" />} />
            <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={9} country="in" category="sports" />} />
            <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={9} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="tecnology" pagesize={9} country="in" category="technology" />} />
          </Routes>


        </BrowserRouter>
      </>

    )
  
}

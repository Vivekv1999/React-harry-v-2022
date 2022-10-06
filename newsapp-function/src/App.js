import React, { Component, useCallback } from 'react'
import Navbar from './news-function/Navbar'
import News from './news-function/News'
import NewsItem from './news-function/NewsItem'

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            hight={3}
          // onLoaderFinished={() => setProgress(0)}
           />

          <Routes> 
            <Route path="/science " element={<News pagesize={9} country="us" catagory="science"/>} />
            <Route path="/About" element={<News pagesize={9} country="us" catagory="science"/>} />

            <Route exact path="/general" element={<News setprogress={this.setprogress} apikey={this.apikey} key="general" pagesize={9} country="in" category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} key="bussiness" pagesize={9} country="in" category="business" />} />
            <Route exact path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key="health" pagesize={9} country="in" category="health" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key="entertainment" pagesize={9} country="in" category="entertainment" />} />
            <Route exact path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key="sports" pagesize={9} country="in" category="sports" />} />
            <Route exact path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key="science" pagesize={9} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key="tecnology" pagesize={9} country="in" category="technology" />} />
          </Routes>


        </BrowserRouter>
      </>

    )
  }
}

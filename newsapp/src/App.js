import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import NewsItem from './Component/NewsItem'

export default class App extends Component {
  c="joy"
  render() {
    return (
      <>
      <Navbar />
      <News pagesize={9}/>
      
      </>
      
    )
  }
}

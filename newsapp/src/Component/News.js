import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsSafar - Top Headine</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="Mytitle" description="mydesc"/>
          </div>
          <div className="col-md-4">
          <NewsItem />
          </div>
          <div className="col-md-4">
          <NewsItem />
          </div>
        </div>
       
       
            <div className="row col-md-6"></div>
      </div>
    )
  }
}

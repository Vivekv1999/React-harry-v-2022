import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
            <h2>this is news component</h2>
            <NewsItem />
      </div>
    )
  }
}

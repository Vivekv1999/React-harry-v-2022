import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title,description} = this.props;

    return (
    <>
        <div className="card" style={{width: "18rem"}}>     {/*style="width: 18rem"  --> aam hatu pela ,,,,*/}
          <img src="https://static.politico.com/4f/8f/da1b3d71432497a0c65a6270d9d1/https-delivery.gettyimages.com/downloads/1243577594" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
    )
  }
}

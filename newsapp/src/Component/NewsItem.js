import React, { Component } from 'react'

export default class NewsItem extends Component {
 

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;

    return (
    <><div className="container my-4">

        <div className="card" style={{width: "auto"}}>     {/*style="width: 18rem"  --> aam hatu pela ,,,,*/}
          <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>   {/*//////////this.props.title    ////$$$///   aaam lay jovu*/}
              <p className="card-text">{description}...</p>
              <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-primary  btn-sm">Read More</a>
            </div>
        </div>
    </div>
    </>
    )
  }
}

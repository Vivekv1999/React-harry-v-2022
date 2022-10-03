import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    // jo aa array destruchring no kary hoto to ichi title ave tya == this.props.title..... avu bafha mate karvu padt
    let { description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <><div className="container my-4">

        <div className="card" style={{ width: "auto" }}>     {/*style="width: 18rem"  --> aam hatu pela ,,,,*/}
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>   {/*//////////this.props.title    ////$$$///   aaam lay jovu*/}
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary  btn-sm">Read More</a>
            <p className="card-text"><small className="text-muted">{author},  on {new Date(date).toGMTString()}</small></p>
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
             {source}
            </span>
          </div>
        </div>
      </div>
      </>
    )
  }
}

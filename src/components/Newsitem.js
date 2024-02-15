import React, { Component } from "react";


export default class Newsitem extends Component {
  render() {
    let { title, description,url,imageUrl,author,date,source } = this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          // style={{
          //   width: "22rem"}}
        >
          <img 
            src={imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info">{source}
</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on <strong>{new Date(date).toLocaleString()}</strong></small></p>

            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, update_time, author,source} =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          <img
            src={
              !imgUrl
                ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? 'Unknown':author } on { new Date(update_time).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

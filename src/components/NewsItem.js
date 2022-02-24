import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props; //Defining props
    return (
      <div className="my-3">
        <div className="card">
          <div className="d-flex position-absolute top-0">
          <span
            className="badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
            >
            {source}
          </span>
            </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.cnbctv18.com/wp-content/uploads/2021/09/bse-1019x573.jpg"
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              {title.length > 44 ? "..." : "."}
            </h5>
            <p className="card-text">
              {description}
              {description.length > 80 ? "..." : "."}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
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

export default NewsItem;

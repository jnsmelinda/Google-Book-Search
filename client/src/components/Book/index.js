import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div className="row" id="book" key={this.props.book._id}>
        <div className="col-1 thumbnail" id="bookImg">
          <img className="rounded thumbnail" src={this.props.book.image || "/noimage.png"} alt="thumbnail" />
        </div>
        <div className="col" id="bookInfo">
          <div className="row">
            <div className="col-3">
              <h3>{this.props.book.title}</h3>
              <h4 className="text-muted">{this.props.book.author}</h4>
            </div>
            <div className="col">
              <a href={this.props.book.link} target="_blank">
                <button className="btn btn-light" id="viewButton">
                  View
                </button>
              </a>
              <button
                id="saveDeleteButton"
                className="btn btn-light"
                disabled={this.props.book.saved}
                onClick={() => this.props.onClick(this.props.book)}>{this.props.name}
              </button>
            </div>
          </div>
          <p>{this.props.book.description}</p>
        </div>
      </div>
    );
  }
}

export default Book;

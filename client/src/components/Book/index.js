import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.book._id}>
          <img src={this.props.book.image || "/noimage.png"} alt="thumbnail"></img>
          title: {this.props.book.title}
          author: {this.props.book.author}
          description: {this.props.book.description}
          <a href={this.props.book.link}>
            <button>View</button>
          </a>
          <button disabled={this.props.book.saved} onClick={() => this.props.onClick(this.props.book)}>{this.props.name}</button>
        </li>
      </div>
    );
  }
}

export default Book;

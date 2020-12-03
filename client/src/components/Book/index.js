import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.book._id}>
          <img src={this.props.book.image}></img>
          title: {this.props.book.title}
          author: {this.props.book.author}
          description: {this.props.book.description}
          <a href={this.props.book.link}>
            <button>View</button>
          </a>
          <button onClick={() => this.props.onClick(this.props.book)}>{this.props.name}</button>
        </li>
      </div>
    );
  }
}

export default Book;

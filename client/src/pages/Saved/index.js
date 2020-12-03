import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import API from "../../utils/API";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

    this.getBooks = this.getBooks.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.getBooks();
  }

  getBooks() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
  }

  deleteBook(book) {
    API.deleteBook(book._id)
      .then(() => this.setState({books: this.state.books.filter(e => e._id != book._id)}))
      .catch(console.err)
  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        <Header></Header>
        <ul>
          {
            this.state.books.map(book =>
              <Book name="delete" book={book} onClick={this.deleteBook}></Book>
            )
          }
        </ul>
        <Footer></Footer>
      </div >
    );
  }
}

export default Saved;

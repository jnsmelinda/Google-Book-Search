import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import searchAPI from "../../utils/Books";
import API from "../../utils/API";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

    this.handleSave = this.handleSave.bind(this);
    this.disableSaveButton = this.disableSaveButton.bind(this);
  }

  handleSearch() {
    this.searchBooks(document.getElementById("searchInput").value);
  }

  searchBooks(query) {
    searchAPI.getGooglebook(query)
      .then(res => this.setState({ books: res.data.items.map(this.convertItem) }))
      .catch(err => console.log(err));
  }

  convertItem(item) {
    return {
      _id: item.id,
      author: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      image: item.volumeInfo.imageLinks?.thumbnail,
      link: item.volumeInfo.previewLink,
      title: item.volumeInfo.title
    }
  }

  handleSave(book) {
    API.saveBook(book)
      .then(() => this.disableSaveButton(book))
      .catch(console.err)
  }

  disableSaveButton(book) {
    const bookIndex = this.state.books.findIndex(element => element._id === book._id);
    let books = [...this.state.books];
    let updatedBook = { ...books[bookIndex] };
    updatedBook.saved = true;
    books[bookIndex] = updatedBook;
    this.setState({ books });
  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row" id="inputField">
            <input type="text" id="searchInput" className="input-group" value={this.state.search} placeholder={this.state.search}></input>
            <button onClick={(event) => this.handleSearch(event)} className="btn btn-secondary" id="searchButton">Search</button>
          </div>
          <div className="book-container">
            {
              this.state.books.map(book =>
                <Book name="Save" book={book} onClick={this.handleSave}></Book>
              )
            }
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Search;

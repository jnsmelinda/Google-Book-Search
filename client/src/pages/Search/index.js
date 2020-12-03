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
      image: item.volumeInfo.imageLinks.thumbnail,
      link: item.volumeInfo.previewLink,
      title: item.volumeInfo.title
    }
  }

  handleSave(book) {
    API.saveBook(book)
      .then(console.log)
      .catch(console.err)
  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        <Header></Header>
        <input type="text" id="searchInput" className="form-control" value={this.state.search} placeholder={this.state.search}></input>
        <button onClick={(event) => this.handleSearch(event)} className="btn btn-primary">Search</button>
        <ul>
          {
            this.state.books.map(book =>
              <Book name="save" book={book} onClick={this.handleSave}></Book>
            )
          }
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}

export default Search;

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import API from "../../utils/Books";
import Book from "../../components/Book";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  searchBooks(query) {
    API.getGooglebook(query)
      .then(res => this.setState({ items: res.data.items.map(this.convertItem) }))
      .catch(err => console.log(err));
  }

  handleSearch() {
    this.searchBooks(document.getElementById("searchInput").value);
  };

  convertItem(item) {
    console.log(item);
    return {
      id: item.id,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      image: item.volumeInfo.imageLinks.thumbnail,
      link: item.selfLink,
      title: item.volumeInfo.title
    }
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <Header></Header>
        <input type="text" id="searchInput" className="form-control" value={this.state.search} placeholder={this.state.search}></input>
        <button onClick={(event) => this.handleSearch(event)} className="btn btn-primary">Search</button>
        <ul>
          {this.state.items.map(item => (
            <Book
              id={item.id}
              title={item.title}
              authors={item.authors}
              description={item.description}
              image={item.image}
              link={item.link}>
            </Book>
          ))}
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}

export default Search;

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import API from "../../utils/Books";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  searchBooks(query) {
    API.getGooglebook(query)
      .then(res => this.setState({ items: res.data.items }))
      .catch(err => console.log(err));
  }

  handleSearch() {
    this.searchBooks(document.getElementById("searchInput").value);
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <Header></Header>
        <input type="text" id="searchInput" className="form-control" value={this.state.search} placeholder={this.state.search}></input>
        <button onClick={(event) => this.handleSearch(event)} className="btn btn-primary">Search</button>
        <ul>
          {this.state.items.map(item => (<li key={item.id}>{ item.volumeInfo.title }</li>))}
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}

export default Search;

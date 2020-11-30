import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import API from "../../utils/API";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      API.getBooks()
        .then(res => this.setState({ items: res.data }))
        .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.items);
    return (
      < div >
        <Header></Header>
        <ul>
          {this.state.items.map(item => (
            <Book
              item={item}>
            </Book>
          ))}
        </ul>
        <Footer></Footer>
      </div >
    );
  }
}

export default Saved;

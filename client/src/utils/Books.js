import axios from "axios";

export default {
  getGooglebook: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  }
};

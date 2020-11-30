import React from "react";
import API from "../../utils/API";

function Book(props) {

  function handleSave() {
    API.saveBook(props.item)
      .then(console.log)
      .catch(console.err)
  }

  return (
    <div>
      <li key={props.item._id}>
        <img src={props.item.image}></img>
        title: {props.item.title}
        author: {props.item.author}
        description: {props.item.description}
        <a href={props.item.link}>
          <button>View</button>
        </a>
        <button onClick={(event) => handleSave(event)}>Save</button>
      </li>
    </div>
  );
}

export default Book;

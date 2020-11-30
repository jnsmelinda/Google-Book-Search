import React from "react";

function Book(props) {
  return (
    <div>
      <li key={props.id}>
        title: {props.title}
        authors: {props.authors}
        description: {props.description}
        <img src={props.image}></img>
        <a href={props.link}></a>
      </li>
    </div>
  );
}

export default Book;

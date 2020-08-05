import React from "react";
import classes from "./repository.module.css";

const reporitory = (props) => {
  return (
    <div className={classes.container}>
      <img alt="preview" src={props.item.img}></img>

      <a href={props.item.link}>
        <h2>{props.item.name}</h2>
      </a>
      <h4>Stars : {props.item.stars}</h4>
      <h4>Forks : {props.item.forks} </h4>
    </div>
  );
};

export default reporitory;

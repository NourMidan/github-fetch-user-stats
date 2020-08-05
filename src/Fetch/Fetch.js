import React, { Component } from "react";
import Reporitory from "./repository/repository";
import classes from "./Fetch.module.css";

class Fetch extends Component {
  state = {
    data: [],
  };
  async getRepos() {
    const url = "https://api.github.com/search/repositories?q=stars:>100000";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    const data = result.items.map((i) => {
      return {
        img: i.owner.avatar_url,
        name: i.full_name,
        link: i.html_url,
        stars: i.stargazers_count,
        forks: i.forks,
      };
    });

    this.setState(
      (prevState) => ({
        data: data,
      }),
      () => console.log(this.state)
    );
  }
  componentDidMount() {
    this.getRepos();
  }

  render() {
    return (
      <div>
        <h1>Top Github repositories</h1>
        <div className={classes.container}>
          {this.state.data.map((i, index) => {
            return (
              <div className={classes.item}>
                <Reporitory item={i} key={index}></Reporitory>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Fetch;

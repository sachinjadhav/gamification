import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import { Search, Label } from "semantic-ui-react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      value: "",
      results: [],
      options: [],
      users: [],
      events: [],
      commonarr: [],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resultRenderer = this.resultRenderer.bind(this);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      const re = new RegExp(this.state.value, "i");
      const isMatch = (result) => re.test(result.name);

      const results = this.state.options
        .filter(isMatch)
        .map((result) => ({ ...result, key: result.name }));

      this.setState({
        isLoading: false,
        results: results,
      });
    }, 500);
  };

  resultRenderer({ name, rank, empid, description }) {
    if (empid) {
      return (
        <div className="category">
          <div className="name"> User </div>
          <div className="results">
            {empid && <div className="price">{empid}</div>}
            {name && <div className="title">{name}</div>}
            {rank && <div className="description">{rank}</div>}
          </div>
        </div>
      );
    } else {
      return (
        <div className="category">
          <div className="name"> Event </div>

          <div className="results">
            {name && <div className="title">{name}</div>}
            {description && <div className="description">{description}</div>}
          </div>
        </div>
      );
    }
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name });
  };

  componentDidMount() {
    this.getUsers();
    this.getEvents();
  }

  componentDidUpdate() {
    this.flatarray();
  }

  flatarray = () => {
    // console.log(this.state.commonarr.flat(1));
    this.state.options = this.state.commonarr.flat(1);
  };

  getUsers = () => {
    axios
      .get("/api/users")
      .then((usersres) => {
        if (usersres.data) {
          // this.setState({
          //   options: usersres.data,
          // });

          this.setState({
            commonarr: [...this.state.commonarr, usersres.data],
          });
        }
      })
      .catch((err) => console.log(err));
  };

  getEvents = () => {
    axios
      .get("/api/events")
      .then((eventsres) => {
        if (eventsres.data) {
          // this.setState({
          //   options: eventsres.data,
          // });
          this.setState({
            commonarr: [...this.state.commonarr, eventsres.data],
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        input={{ fluid: true }}
        icon="search"
        placeholder="Search Events or Users ..."
        loading={isLoading}
        resultRenderer={this.resultRenderer}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        onResultSelect={this.handleResultSelect}
        results={results}
        value={value}
      />
    );
  }
}

export default SearchBar;

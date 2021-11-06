import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import { Search } from "semantic-ui-react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      value: "",
      results: [],

      // searcharray: {
      //   Events: {
      //     name: "Events",
      //     results: [],
      //   },
      //   Users: {
      //     name: "Users",
      //     results: [],
      //   },
      // },
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resultRenderer = this.resultRenderer.bind(this);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.name);

      const filteredResults = _.reduce(
        this.props.searcharray,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {}
      );

      this.setState({
        isLoading: false,
        results: filteredResults,
      });
    }, 10);
  };

  resultRenderer({ name, rank, empid, location, email, description }) {
    if (empid) {
      return (
        <div>
          {email && <div className="price">{email}</div>}
          {name && <div className="title">{name}</div>}
          {rank && empid && location && (
            <div className="description">
              {rank}, {empid}, {location}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          {name && <div className="title">{name}</div>}
          {description && <div className="description">{description}</div>}
        </div>
      );
    }
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name });
  };

  componentDidMount() {
    // this.getUsers();
    // this.getEvents();
  }

  // getUsers = () => {
  //   axios
  //     .get("/api/users")
  //     .then((usersres) => {
  //       if (usersres.data) {
  //         this.state.searcharray.Users.results = usersres.data;
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // getEvents = () => {
  //   axios
  //     .get("/api/events")
  //     .then((eventsres) => {
  //       if (eventsres.data) {
  //         this.state.searcharray.Events.results = eventsres.data;
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

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
        category
      />
    );
  }
}

export default SearchBar;

import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import Container from "@material-ui/core/Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    //The above 2 lines can be simpliefied as
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div maxWidth="xl" className="App">
        <h1>Monster Finder</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        {/* <CardList monsters={this.state.monsters}></CardList> */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
}
export default App;

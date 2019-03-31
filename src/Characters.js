import React, { Component } from "react";
import CharactersHeader from "./components/headers/CharactersHeader";
import CharactersList from "./components/content/CharactersList";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://www.anapioficeandfire.com/api/characters")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          characters: json
        });
      });
  }

  render() {
    const { isLoaded, characters } = this.state;

    if (!isLoaded) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <CharactersHeader />
          <CharactersList characters={characters} />
        </div>
      );
    }
  }
}
export default Characters;

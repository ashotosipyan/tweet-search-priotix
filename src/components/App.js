import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
	render() {
		return (
			<div className="row justify-content-center">
				<div className="jumbotron custom-jumbotron">
					<h1 className="display-4">Priotix technical task</h1>
					<hr className="my-4" />
					<p className="lead">
						Enter any term in the search bar and add your favorite
						results in your own fav-box
					</p>
				</div>
				<SearchBar />
			</div>
		);
	}
}

export default App;

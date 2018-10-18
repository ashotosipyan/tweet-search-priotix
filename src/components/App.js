import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FavoritesTab from "./FavoritesTab";

class App extends Component {
	constructor() {
		super();
		this.state = {
			tmpData: null
		};
	}

	handleFavItemObject = favorite => {
		this.setState({
			tmpData: favorite
		});
	};

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
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<SearchBar onFavItemAdd={this.handleFavItemObject} />
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<FavoritesTab favoriteItem={this.state.tmpData} />
				</div>
			</div>
		);
	}
}

export default App;

import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <input className="search-bar" type="text" />;
	}
}

export default SearchBar;

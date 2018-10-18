import React, { Component } from "react";
import FavoritesTabList from "./FavoritesTabList";

class FavoritesTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userFavTweets: []
		};
	}

	componentDidMount() {
		this.setState({
			userFavTweets: JSON.parse(localStorage.getItem("favoriteTweets"))
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.favoriteItem !== prevProps.favoriteItem) {
			let favTweets = JSON.parse(localStorage.getItem("favoriteTweets"));

			if (favTweets == null) favTweets = [];

			favTweets.push(this.props.favoriteItem);

			localStorage.setItem("favoriteTweets", JSON.stringify(favTweets));

			let newStateItem = this.state.userFavTweets.concat(
				this.props.favoriteItem
			);

			this.setState({
				userFavTweets: newStateItem
			});
		}
	}

	handleItemDelete = id => {
		let newStateArray = [...this.state.userFavTweets];
		let removedItemIndex = this.state.userFavTweets.findIndex(
			tweet => tweet.id === id
		);

		newStateArray.splice(removedItemIndex, 1);

		this.setState({
			userFavTweets: newStateArray
		});

		let favTweets = JSON.parse(localStorage.getItem("favoriteTweets"));

		let removedItemIndexLocalStorage = favTweets.findIndex(
			favTweet => favTweet.id === id
		);

		favTweets.splice(removedItemIndexLocalStorage, 1);

		localStorage.setItem("favoriteTweets", JSON.stringify(favTweets));
	};

	render() {
		return (
			<ul className="list-group">
				<FavoritesTabList
					userFavTweets={this.state.userFavTweets}
					deleteItem={this.handleItemDelete}
				/>
			</ul>
		);
	}
}

export default FavoritesTab;

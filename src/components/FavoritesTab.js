import React, { Component, Fragment } from "react";
import FavoritesTabList from "./FavoritesTabList";
import ConfirmationModal from "./ConfirmationModal";
import storage from "../utils/LocalStorage.class";

class FavoritesTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userFavTweets: [],
			tmpRemoveItemId: ""
		};
	}

	componentDidMount() {
		this.setState({
			userFavTweets: storage.tweetsArray
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.favoriteItem !== prevProps.favoriteItem) {
			// Localstorage

			let favTweets = storage.tweetsArray;

			if (favTweets == null) favTweets = [];

			favTweets.push(this.props.favoriteItem);

			storage.tweetsArray = favTweets;

			// State

			let favTweetList = this.state.userFavTweets;

			if (favTweetList == null) favTweetList = [];

			let newStateItem = favTweetList.concat(this.props.favoriteItem);

			this.setState({
				userFavTweets: newStateItem
			});
		}
	}

	handleDeleteItemId = id => {
		this.setState({
			tmpRemoveItemId: id
		});
	};

	handleItemDelete = id => {
		let newStateArray = [...this.state.userFavTweets];
		let removedItemIndex = this.state.userFavTweets.findIndex(
			tweet => tweet.id === id
		);

		newStateArray.splice(removedItemIndex, 1);

		this.setState({
			userFavTweets: newStateArray
		});

		let favTweets = storage.tweetsArray;

		let removedItemIndexLocalStorage = favTweets.findIndex(
			favTweet => favTweet.id === id
		);

		favTweets.splice(removedItemIndexLocalStorage, 1);

		storage.tweetsArray = favTweets;
	};

	render() {
		return (
			<Fragment>
				<h3>Favorites Box</h3>
				<ul className="list-group">
					<FavoritesTabList
						userFavTweets={this.state.userFavTweets}
						getRemoveItemId={this.handleDeleteItemId}
					/>
				</ul>
				<ConfirmationModal
					getItemId={this.state.tmpRemoveItemId}
					deleteItem={this.handleItemDelete}
				/>
			</Fragment>
		);
	}
}

export default FavoritesTab;

import React, { Component, Fragment } from "react";
import getTweets from "../utils/getTweets";
import SearchResultList from "./SearchResultList";
import HOCloader from "./HOCloader";

const ListWithLoading = HOCloader(SearchResultList);

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			tweets: []
		};
	}

	getResultsOnChange = e => {
		e.preventDefault();
		this.setState({ loading: true });

		getTweets(e.target.value).then(result =>
			this.setState({
				tweets: result,
				loading: false
			})
		);
	};

	getFavoriteTweetObject = id => {
		let favObject = this.state.tweets.find(tweet => tweet.id === id);
		this.props.onFavItemAdd(favObject);
		document.getElementById("searchInput").value = "";
		document.getElementById("resultsContainer").style.display = "none";
	};

	render() {
		return (
			<Fragment>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span
							className="input-group-text"
							id="inputGroup-sizing-default"
						>
							Search box
						</span>
						<input
							id="searchInput"
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							onChange={this.getResultsOnChange}
						/>
					</div>
				</div>

				{this.state.tweets.length > 0 ? (
					<div
						id="resultsContainer"
						className="search-results-wrapper"
					>
						<ul className="list-group">
							<ListWithLoading
								isLoading={this.state.loading}
								tweetsList={this.state.tweets}
								getFavTweetObject={this.getFavoriteTweetObject}
							/>
						</ul>
					</div>
				) : (
					""
				)}
			</Fragment>
		);
	}
}

export default SearchBar;

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
			hideSearchResultsBar: true,
			tweets: []
		};
	}

	getResultsOnChange = e => {
		e.preventDefault();
		this.setState({ loading: true, hideSearchResultsBar: false });

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
		this.searchInput.value = "";
		this.setState({
			hideSearchResultsBar: true
		});
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
							ref={el => (this.searchInput = el)}
						/>
					</div>
				</div>

				{this.state.tweets.length > 0
					? !this.state.hideSearchResultsBar && (
							<div
								id="resultsContainer"
								className="search-results-wrapper"
							>
								<ul className="list-group">
									<ListWithLoading
										isLoading={this.state.loading}
										tweetsList={this.state.tweets}
										getFavTweetObject={
											this.getFavoriteTweetObject
										}
									/>
								</ul>
							</div>
					  )
					: ""}
			</Fragment>
		);
	}
}

export default SearchBar;

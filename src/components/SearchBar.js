import React, { Component } from "react";
import getTweets from "../utils/getTweets";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: []
		};
	}

	getResultsOnChange = e => {
		e.preventDefault();
		getTweets(e.target.value).then(result =>
			this.setState({
				tweets: result
			})
		);
	};

	render() {
		return (
			<div className="col-6">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span
							className="input-group-text"
							id="inputGroup-sizing-default"
						>
							Search box
						</span>
						<input
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							onChange={this.getResultsOnChange}
						/>
					</div>
				</div>
				<div className="search-results-wrapper">
					<ul className="list-group">
						{this.state.tweets.length > 0
							? this.state.tweets.map(tweet => (
									<li
										key={tweet.id}
										className="list-group-item"
									>
										<div className="row">
											<div className="col-2">
												<img
													src={tweet.image}
													className="img-responsive rounded result-images"
													alt="results_image"
												/>
											</div>
											<div className="col-10">
												<span className="align-middle">
													{tweet.title}
												</span>
											</div>
										</div>

										<div className="col-12">
											<p className="result-description">
												{tweet.description}
											</p>
										</div>
									</li>
							  ))
							: "No results"}
					</ul>
				</div>
			</div>
		);
	}
}

export default SearchBar;

import React from "react";

const SearchResultList = props => {
	let { tweetsList } = props;

	if (!tweetsList) return null;

	return tweetsList.map((tweet, index) => (
		<li
			key={index}
			className="list-group-item result-list-item"
			onClick={() => props.getFavTweetObject(tweet.id)}
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
					<span className="align-middle">{tweet.title}</span>
				</div>
			</div>

			<div className="col-12">
				<p className="result-description">{tweet.description}</p>
			</div>
		</li>
	));
};

export default SearchResultList;

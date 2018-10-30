import React from "react";
import PropTypes from "prop-types";

const FavoritesTabList = props => {
	if (!props.userFavTweets) return "No records yet!";
	return props.userFavTweets.map((favTweet, index) => (
		<li key={index} className="list-group-item">
			<div className="row">
				<div className="col-10">{favTweet.title}</div>
				<div className="col-2">
					<p className="delete-icon">
						<button
							onClick={() => props.getRemoveItemId(favTweet.id)}
							data-toggle="modal"
							data-target="#confirmationModal"
						>
							<i className="fas fa-times" />
						</button>
					</p>
				</div>
			</div>
		</li>
	));
};

FavoritesTabList.propTypes = {
	userFavTweets: PropTypes.array
};

export default FavoritesTabList;

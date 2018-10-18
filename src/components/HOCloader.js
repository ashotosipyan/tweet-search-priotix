import React from "react";
import gearLoader from "../Gear.png";

function HOCloader(Component) {
	return function HOCloaderComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<div className="loader-wrapper">
				<img
					src={gearLoader}
					className="loader-image"
					alt="Fetch Loader"
				/>
			</div>
		);
	};
}

export default HOCloader;

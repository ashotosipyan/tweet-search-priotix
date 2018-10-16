import axios from "axios";

const getTweets = async term => {
	let url = `https://api-search.priotix.xyz/search?q=${term}&index=tournament`;
	try {
		return await axios
			.get(url)
			.then(response => {
				let data = response.data[0].documents;
				return data;
			})
			.catch(error => {
				return error;
			});
	} catch (error) {
		return error;
	}
};

export default getTweets;

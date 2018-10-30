class LocalStorage {
	constructor(arrName, arrValue) {
		this._key = arrName;
		this._value = arrValue;
	}

	get tweetsArray() {
		return JSON.parse(localStorage.getItem(this._key));
	}

	set tweetsArray(newValue) {
		this._value = newValue;
		localStorage.setItem(this._key, JSON.stringify(this._value));
	}
}

export default new LocalStorage("favoriteTweets");

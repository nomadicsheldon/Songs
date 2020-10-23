import { combineReducers } from "redux";

// reducers
const songsReducer = () => {
	return [
		{
			title: "song1",
			duration: "4:05",
		},
		{
			title: "song2",
			duration: "2:25",
		},
		{
			title: "song3",
			duration: "1:45",
		},
		{
			title: "song4",
			duration: "3:05",
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

// combining reducers
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});

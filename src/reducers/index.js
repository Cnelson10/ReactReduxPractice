import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Accordian", duration: "1:58" },
    { title: "Paper Trail$", duration: "3:14" },
    { title: "One More Round", duration: "3:50" },
    { title: "Earfquake", duration: "3:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if ((action.type = "SONG_SELECTED")) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

import axios from "axios";

const KEY = "AIzaSyDfosLjx6lfA0HWINGgIdCVfXWn1s8s7Pw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

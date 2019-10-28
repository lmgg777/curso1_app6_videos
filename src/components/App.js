import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], videoSelected: null };

  componentDidMount() {
    this.onSearchSubmit("npr latin");
  }

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      },
      filters: {
        videoDefinition: "high"
      }
    });
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar submited={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

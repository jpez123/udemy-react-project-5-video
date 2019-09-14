//Import libraries
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

//Component
class App extends React.Component {
    //Variables
    state = {
        videos: [],
        selectedVideo: null
    };

    //Lifecycle
    componentDidMount() {
        this.onSearchSubmit('popular');
    }

    //Functions
    onSearchSubmit = async (term) => {
        const results = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: results.data.items, 
            selectedVideo: results.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    //Render
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

//Export
export default App;
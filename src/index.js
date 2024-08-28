import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // . means current directory
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item';

//if it's a file we write, when we import it, we need to specify the path reference of that file
//if it's a library, when we import it, we can import it directly.

const API_KEY = 'AIzaSyAiMc3Dhk2BBtobwsGd9c1SCC9TQLVmx8Y'

// Create a new component, this component should produce some HTML.
class App extends Component { //const is used to declare variables, just like var. But the value of the variable will never change.
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] // first video in the list will be set to the selected video when finish searching
            }); //this will update the state whenever we fetch new data
            // whenever the value of variable is the same as the variable, we can use a curly braces to wrap it
            // ({videos}) equals to this.setState({videos: videos});
        });
    }

    render () {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} /> 
            </div> // JSX is sth looks like HTML, but behind the scene, it's just javascript
        );
    }
}

// we can use the other way to represent a function, instead of using function keyword
// const App = () => {

// }

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container')); // instead of passing a class, we pass an instance of App class.
// the latter part is to tell where to place the instance of App on the webpage.
import React, { Component } from 'react';
import './styles/App.scss';
import styleHelper from './styleHelpers';
import utils from './utilities'
import Nav from './Nav'
import Frame from './Frame'

class App extends Component {

  constructor(props) {
    super(props);
    const loadingFrame = this.getLoadingFrame();
    this.state = {
        frames: {'-1':loadingFrame},
        currentFrame: loadingFrame
    };
    this.onLinkButtonClicked = this.onLinkButtonClicked.bind(this)
  }

  componentDidMount() {
    setTimeout(this.loadFrameData.bind(this), 2000);
  }

  render(){
    const currentFrame = this.state.currentFrame;
    const loading = currentFrame.id == -1;
    let content = loading ? this.renderLoading() :
                            this.renderFrame(currentFrame);
    return (
      <div className="App" style={styleHelper.getMainStyle(loading, currentFrame)}>
        <div className="grid">
          <div className='content' style={styleHelper.getContentStyle(loading, currentFrame)}>
            {content}
          </div>
        </div>
      </div>
    );
  }

  renderLoading() {
        return (
            <div className='loading'>
                <h1>loading</h1>
            </div>
        );
  }
  renderFrame(frame) {
        return (
            <div className='frame-box'>
              <Frame frame={frame} />
              <Nav frame={frame} linkHandler={this.onLinkButtonClicked}/>
            </div>
        );
  }

  getFrameData(frames) {
    for (let key in frames) {
      let frame = frames[key];
      frame.id = key;
    }
    return frames
  }

  getFrame(id) {
    return this.state.frames[id];
  }

  onLinkButtonClicked(linkindex) {
    this.setState(prevState => ({
      currentFrame: this.getFrame(linkindex)
    }));
  }

  getLoadingFrame() {
    return {
      id: -1,
      colors: {
        bg: "#916F04",
        text: "#FFC100",
      }
    };
  }

  loadFrameData() {
    fetch('/data/story.json')
    .then((response) => {return response.json();})
    .then(function(json) {
      this.state.frames = this.getFrameData(json.frames);
      this.setState(prevState => ({
        currentFrame: this.getFrame(9)
      }));
      console.log(json.frames)
    }.bind(this));
  }
}

export default App;

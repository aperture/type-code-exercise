

import React, { Component } from 'react';
import './styles/Frame.scss';
import styleHelper from './styleHelpers';
import utils from './utilities'
class Frame extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Frame">
        <div className='title'>
          <h1>{this.props.frame.title}</h1>
        </div>
        <div className='body'>
            <div className='columns'
              dangerouslySetInnerHTML={this.getBodyMarkup(this.props.frame)}>
            </div>
        </div>
    </div>
  }

  getBodyMarkup(frame){
    let body = '<pre>';
    body += utils.stripParagraphs(frame.body);
    body += '</pre>';
    if(frame.img) {
    body = body + '<img src="/' + frame.img + '"/>';
    }
    return {
       __html: body
     }
  }
}

export default Frame;

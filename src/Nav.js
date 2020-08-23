import React, { Component } from 'react';
import './styles/Nav.scss';
import styleHelper from './styleHelpers';
import utils from './utilities'
class Nav extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return <div className='Nav'>
      {this.renderFrameNumber(this.props.frame)}
      {this.renderButtons(this.props.frame.buttons)}
    </div>
  }

  renderFrameNumber(frame){
    return (
      <div className='number'
        style={styleHelper.getTextBackgroundStyle(frame)}>
        {parseInt(frame.id) + 1}
      </div>
    )
  }

  renderButtons(buttons){
    let elements = []
    const POSITIONS = {
      RIGHT:'right',
      LEFT:'left'
    }
    if(buttons.length == 1){
      elements.push(this.renderButton(buttons[0], POSITIONS.RIGHT))
    } else if(buttons.length == 2){
      elements.push(this.renderButton(buttons[0], POSITIONS.LEFT))
      elements.push(this.renderButton(buttons[1], POSITIONS.RIGHT))
    }
    return (
      <div className='buttons'>
        {elements}
      </div>
    )
  }

  renderButton(button, position){
    return (
      <div className={"button " + position}
        role="button"
        style={styleHelper.getTextBackgroundStyle(this.props.frame)}
        onClick={() => this.props.linkHandler(button.linkindex)}>
        {button.text}
      </div>
    )
  }
}

export default Nav;

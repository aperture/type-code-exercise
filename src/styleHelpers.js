
function getTextBackgroundStyle(frame){
  return {
        backgroundColor: frame.colors.bg,
        color: frame.colors.text
  }
}

function getContentStyle(loading, currentFrame){
  let style = {
    color: currentFrame.colors.text
    };
  if (loading) {
    style['backgroundColor'] = currentFrame.colors.bg;
  } else {
    style['border'] = '1rem solid' +
    currentFrame.colors.text
  }
  return style
}

function getMainStyle(loading, currentFrame){

  // switch background color for text color when loading
  let colorProp = loading ? 'text' : 'bg'
  return {
    className:'App',
    backgroundColor: currentFrame.colors[colorProp]
  }
}

export default { getTextBackgroundStyle, getContentStyle, getMainStyle }

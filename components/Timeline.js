import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class Timeline extends Component {
  render () {
    const { orientation = 'left', children, lineColor, lineStyle, style, ...otherProps } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { orientation }))
    let leftOrRight = (orientation === 'right') ? { ...s['containerBefore--right'] } : { ...s['containerBefore--left'] }
    let lineAppearance = { ...leftOrRight, ...lineStyle }
    lineAppearance = lineColor ? { ...lineAppearance, background: lineColor } : lineAppearance
    return (
      <div>
        <section style={{ ...s.container, ...style }} {...otherProps}>
          <div style={{ ...s.containerBefore, ...lineAppearance }} />
          {childrenWithProps}
          <div style={s.containerAfter} />
        </section >
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
  style: PropTypes.object,
  lineColor: PropTypes.string,
  lineStyle: PropTypes.object
}

Timeline.defaultProps = {
  style: {},
  lineStyle: {}
}

export default Timeline

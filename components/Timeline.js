import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class Timeline extends Component {
  render () {
    const { orientation = 'left', children, lineColor, style = {}, ...otherProps } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { orientation }))
    let leftOrRight = (orientation === 'right') ? {...s['containerBefore--right']} : {...s['containerBefore--left']}
    leftOrRight = lineColor ? {...leftOrRight, background: lineColor} : leftOrRight
    return (
      <div>
        <section style={{...s.container, ...style}} {...otherProps}>
          <div style={{...s.containerBefore, ...leftOrRight}} />
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
  lineColor: PropTypes.string
}

export default Timeline

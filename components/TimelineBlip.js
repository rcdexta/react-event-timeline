import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineBlip extends Component {
  mergeNotificationStyle(iconColor) {
    return iconColor ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } } : s.eventType
  }

  iconStyle(iconStyle) {
    return { ...s.materialIcons, ...iconStyle }
  }

  render() {
    const { title, iconStyle, icon, orientation, iconColor, style, ...otherProps } = this.props
    const leftOrRightEvent = (orientation === 'right') ? { ...s['event--right'] } : { ...s['event--left'] }
    return (
      <div style={{ ...s.event, marginBottom: 50, ...style }}>
        <div style={this.mergeNotificationStyle(iconColor)}>
          <span style={this.iconStyle(iconStyle)}>{icon}</span>
        </div>
        <div {...otherProps} style={{ ...s.blipStyle, ...leftOrRightEvent }}>
          <div>{title}</div>
        </div>
        <div style={s.eventAfter} />
      </div>
    )
  }
}

TimelineBlip.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  style: PropTypes.object,
  orientation: PropTypes.string
}

TimelineBlip.defaultProps = {
  iconStyle: {},
  style: {}
}

export default TimelineBlip

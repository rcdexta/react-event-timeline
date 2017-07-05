import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineBlip extends Component {

  mergeNotificationStyle(iconColor) {
    return iconColor ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } } : s.eventType
  }

  iconStyle(iconStyle) {
    return { ...s.materialIcons, iconStyle }
  }

  render() {
    const { title, iconStyle, icon, iconColor, ...otherProps } = this.props
    return (
      <div style={{...s.event, marginBottom: 50}}>
        <div style={this.mergeNotificationStyle(iconColor)}>
          <span style={this.iconStyle(iconStyle)}>{icon}</span>
        </div>
        <div {...otherProps} style={s.blipStyle}>
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
  style: PropTypes.object
}

TimelineBlip.defaultProps = {
  createdAt: undefined,
  iconStyle: {},
  contentStyle: {},
  style: {}
}

export default TimelineBlip

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineEvent extends Component {

  mergeNotificationStyle(iconColor) {
    return iconColor ? {...s.eventType, ...{color: iconColor, borderColor: iconColor}} : s.eventType
  }

  mergeContentStyle(contentStyle) {
    const messageStyle = this.showAsCard() ? s.cardBody : s.message
    return contentStyle ? {...messageStyle, ...contentStyle} : messageStyle
  }

  timeStyle() {
    return this.showAsCard() ? {...s.time, color: '#fff'} : s.time
  }

  showAsCard() {
    const {container} = this.props
    return container === 'card'
  }

  containerStyle() {
    const {style} = this.props
    const userStyle = style || {}
    return this.showAsCard() ? {...s.eventContainer, ...s.card, ...userStyle} : s.eventContainer
  }

  iconStyle() {
    return {...s.materialIcons, ...this.props.iconStyle}
  }

  render() {
    const {createdAt, title, contentStyle, buttons, icon, iconColor, container, ...otherProps} = this.props
    return <div style={s.event}>
      <div style={this.mergeNotificationStyle(iconColor)}>
        <span style={this.iconStyle()}>{icon}</span>
      </div>

      <div {...otherProps} style={this.containerStyle()}>
        <div style={s.eventContainerBefore} />
        <div style={container === 'card' ? s.cardTitle : {}}>
          <div style={this.timeStyle()}>{createdAt}</div>
          <div>{title}</div>
          <div style={s.actionButtons}>{buttons}</div>
        </div>
        <div style={this.mergeContentStyle(contentStyle)}>
          {this.props.children}
          <div style={s.messageAfter} />
        </div>
      </div>
      <div style={s.eventAfter} />
    </div>
  }

}

TimelineEvent.propTypes = {
  title: PropTypes.node.isRequired,
  createdAt: PropTypes.node.isRequired,
  children: PropTypes.node,
  buttons: PropTypes.node,
  container: PropTypes.string,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.string,
  contentStyle: PropTypes.object,
  style: PropTypes.object
}

TimelineEvent.defaultProps = {
  iconStyle: {},
  contentStyle: {}
}

export default TimelineEvent

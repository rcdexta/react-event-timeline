import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineEvent extends Component {
  mergeNotificationStyle(iconColor, bubbleStyle) {
    const iconColorStyle = iconColor ? {...s.eventType, ...{color: iconColor, borderColor: iconColor}} : s.eventType
    return {...iconColorStyle, ...bubbleStyle}
  }

  mergeContentStyle(contentStyle) {
    const messageStyle = this.showAsCard() ? s.cardBody : s.message
    return contentStyle ? {...messageStyle, ...contentStyle} : messageStyle
  }

  timeStyle() {
    return this.showAsCard() ? s.time : {...s.time, color: '#303e49'}
  }

  showAsCard() {
    const {container} = this.props
    return container === 'card'
  }

  containerStyle() {
    const {style} = this.props
    const containerStyle = {...s.eventContainer, ...style}
    return this.showAsCard() ? {...containerStyle, ...s.card} : containerStyle
  }

  iconStyle(iconStyle) {
    return {...s.materialIcons, ...iconStyle}
  }

  render() {
    const {
      createdAt,
      title,
      contentStyle,
      iconStyle,
      buttons,
      icon,
      iconColor,
      container,
      cardHeaderStyle,
      ...otherProps
    } = this.props
    return (
      <div style={s.event}>
        <div style={this.mergeNotificationStyle(iconColor, iconStyle)}>
          <span style={s.materialIcons}>
            {icon}
          </span>
        </div>
        <div {...otherProps} style={this.containerStyle()}>
          <div style={s.eventContainerBefore} />
          <div style={container === 'card' ? {...s.cardTitle, ...cardHeaderStyle} : {}}>
            <div style={this.timeStyle()}>
              {createdAt}
            </div>
            <div>
              {title}
            </div>
            <div style={s.actionButtons}>
              {buttons}
            </div>
          </div>
          {this.props.children &&
            <div style={this.mergeContentStyle(contentStyle)}>
              {this.props.children}
              <div style={s.messageAfter} />
            </div>}
        </div>
        <div style={s.eventAfter} />
      </div>
    )
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
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  cardHeaderStyle: PropTypes.object,
  style: PropTypes.object
}

TimelineEvent.defaultProps = {
  createdAt: undefined,
  iconStyle: {},
  contentStyle: {},
  cardHeaderStyle: {},
  style: {}
}

export default TimelineEvent

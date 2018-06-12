import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineEvent extends Component {
  mergeNotificationStyle(iconColor, bubbleStyle, orientation) {
    const iconColorStyle = iconColor ? {...s.eventType, ...{color: iconColor, borderColor: iconColor}} : s.eventType
    const leftOrRight = (orientation === 'right') ? {...s['eventType--right']} : {...s['eventType--left']}
    return {...iconColorStyle, ...leftOrRight, ...bubbleStyle}
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
    return this.showAsCard() ? {...s.card, ...containerStyle} : containerStyle
  }

  render() {
    const {
      createdAt,
      title,
      subtitle,
      contentStyle,
      iconStyle,
      bubbleStyle,
      buttons,
      icon,
      iconColor,
      container,
      cardHeaderStyle,
      titleStyle,
      subtitleStyle,
      orientation,
      ...otherProps
    } = this.props
    const leftOrRightEventStyling = (orientation === 'right') ? {...s['event--right']} : {...s['event--left']}
    const leftOrRightButtonStyling = (orientation === 'left') ? {...s['actionButtons--right']} : {...s['actionButtons--left']}
    return (
      <div style={{...s.event, ...leftOrRightEventStyling}}>
        <div style={this.mergeNotificationStyle(iconColor, bubbleStyle, orientation)}>
          <span style={{...s.materialIcons, ...iconStyle}}>
            {icon}
          </span>
        </div>
        <div {...otherProps} style={this.containerStyle()}>
          <div style={s.eventContainerBefore} />
          <div style={container === 'card' ? {...s.cardTitle, ...cardHeaderStyle} : {}}>
            {createdAt &&
              <div style={this.timeStyle()}>
                {createdAt}
              </div>}
            <div style={titleStyle}>
              {title}
            </div>
            {subtitle &&
              <div style={{...s.subtitle, ...subtitleStyle}}>
                {subtitle}
              </div>}
            <div style={{...s.actionButtons, ...leftOrRightButtonStyling}}>
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
  subtitle: PropTypes.node,
  createdAt: PropTypes.node,
  children: PropTypes.node,
  buttons: PropTypes.node,
  container: PropTypes.string,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  bubbleStyle: PropTypes.object,
  orientation: PropTypes.string,
  contentStyle: PropTypes.object,
  cardHeaderStyle: PropTypes.object,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object
}

TimelineEvent.defaultProps = {
  createdAt: undefined,
  iconStyle: {},
  bubbleStyle: {},
  contentStyle: {},
  cardHeaderStyle: {},
  style: {},
  titleStyle: {},
  subtitleStyle: {},
  orientation: 'left'
}

export default TimelineEvent

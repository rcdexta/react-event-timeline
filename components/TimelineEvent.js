import React, {Component}  from 'react'
import s from './styles'

class TimelineEvent extends Component {

  eventNotificationStyle() {
    const {iconColor} = this.props
    if (iconColor) {
      return Object.assign( s.eventType, {color: iconColor, borderColor: iconColor})
    } else {
      return s.eventType
    }
  }

  render() {
    return <div style={s.event}>
      <div style={this.eventNotificationStyle()}>
        <span style={s.materialIcons}>{this.props.icon}</span>
      </div>
      <div style={s.eventContent}>
        <div style={s.eventContentBefore}></div>
        <div style={s.time}>{this.props.createdAt}</div>
        <div style={s.title}>{this.props.title}</div>
        <div style={s.actionButtons}>{this.props.buttons}</div>
        <div style={{clear: 'both', marginBottom: 10}}></div>
        <div style={s.message}>
          {this.props.children}
          <div style={s.messageAfter}></div>
        </div>
      </div>
      <div style={s.eventAfter}></div>
    </div>
  }

}

TimelineEvent.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
  createdAt: React.PropTypes.string.isRequired,
  buttons: React.PropTypes.node
};

export default TimelineEvent

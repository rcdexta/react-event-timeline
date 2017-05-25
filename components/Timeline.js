import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class Timeline extends Component {

  render () {
    return (
      <div>
        <section style={s.container} {...this.props}>
          <div style={s.containerBefore} />
          {this.props.children}
          <div style={s.containerAfter} />
        </section >
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired
}

export default Timeline

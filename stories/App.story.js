import React, { Component } from 'react'
import { storiesOf } from '@kadira/storybook'

import { Timeline, TimelineEvent, TimelineBlip } from '../components/index'
import Image from './sample.jpg'

const globalStyles = {
  backgroundColor: '#eeeeee',
  height: '100vh',
  fontFamily: 'Roboto'
}

const container = story => (
  <div style={globalStyles}>
    {story()}
  </div>
)

storiesOf('Timeline', module)
  .addDecorator(container)
  .addWithInfo('Default View', () => (
    <Timeline>
      <TimelineEvent title="John Doe sent a SMS" createdAt="2016-09-12 10:06 PM" icon={<i className="material-icons md-18">textsms</i>} iconColor="#6fba1c">
        I received the payment for $543. Should be shipping the item within a couple of hours. Thanks for the
        order!
      </TimelineEvent>
      <TimelineEvent
        title="You sent an email to John Doe"
        createdAt="2016-09-11 09:06 AM"
        icon={<i className="material-icons md-18">email</i>}
        iconColor="#03a9f4"
      >
        <p>Subject: Any updates?</p>
        <p>
          Like we talked, you said that you would share the shipment details? This is an urgent order and so I
          am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
          gentle reminder if you are on track already!
        </p>
        <p>- Maya</p>
      </TimelineEvent>

    </Timeline>
  ))
  .addWithInfo('Condensed Timeline', () => (
    <Timeline>
      <TimelineBlip title="Remove PropTypes warning" icon={<i className="material-icons md-18">assignment late</i>} iconColor="#6fba1c" />
      <TimelineBlip title="John starred this thread" icon={<i className="material-icons md-18">grade</i>} iconColor="#6fba1c" />
    </Timeline>
  ))
  .addWithInfo('Action buttons', () => (
    <Timeline>
      <TimelineEvent
        title="You have sent a SMS"
        createdAt="2016-10-02 08:02 AM"
        icon={<i className="material-icons md-18">textsms</i>}
        buttons={<i className="material-icons md-18" style={{ color: '#01579B' }}>reply</i>}
        iconColor="#6fba1c"
      >
        You should be receiving the shipment by tomorrow evening. Please reply back if you have more questions
      </TimelineEvent>
    </Timeline>
  ))
  .addWithInfo('Content with images', () => (
    <Timeline>
      <TimelineEvent title="John Doe sent a SMS" createdAt="2016-09-12 10:06 PM" icon={<i className="material-icons md-18">textsms</i>} iconColor="#6fba1c">
        <p>Please check if this image is good for printing</p>
        <img src={Image} />
      </TimelineEvent>
    </Timeline>
  ))
  .addWithInfo('Card Appearance', () => {
    return (
      <Timeline>
        <TimelineEvent
          title="Introduction to Redux in React applications"
          createdAt="2016-09-12 10:06 PM"
          icon={<i className="material-icons md-18">event</i>}
          iconColor="#757575"
          buttons={<i className="material-icons md-24" style={{ color: '#FFF', marginTop: -5 }}>play_circle_filled</i>}
          container="card"
          style={{boxShadow: '0 0 6px 1px #BD3B36', border: '1px solid #777', borderRadius: 3, fontWeight: 400, color: '#828282c'}}
        >
          A DIY workshop on using React with Redux to build a Instagram clone
        </TimelineEvent>
      </Timeline>
    )
  })
  .addWithInfo('Event handlers', () => {
    return (
      <Timeline>
        <TimelineEvent
          title="John Doe sent you a click bomb"
          createdAt="2016-09-12 10:06 PM"
          icon={<i className="material-icons md-18">textsms</i>}
          iconColor="#6fba1c"
          onClick={() => alert('You clicked here!')}
        >
          Clicking this should raise an alert!
        </TimelineEvent>
      </Timeline>
    )
  })
  .addWithInfo('Custom Styling', () => (
    <Timeline>
      <TimelineEvent
        title="John Doe sent a SMS"
        createdAt="2016-09-12 10:06 PM"
        icon={<i className="material-icons md-18">textsms</i>}
        iconColor="#6fba1c"
        style={{ backgroundColor: '#fff', padding: 10, boxShadow: '0 0 3px 1px #BD3B36', border: '1px solid #eee' }}
        contentStyle={{ backgroundColor: '#00BCD4', color: '#fff' }}
      >
        This message should appear on a different background
      </TimelineEvent>
    </Timeline>
  ))
  .addWithInfo('Dynamic Prop Updates', () => {
    class DynamicTimeline extends Component {
      constructor(props) {
        super(props)
        this.state = {
          createdAt: new Date()
        }
        this.onClick = this.onClick.bind(this);
      }

      onClick() {
        this.setState({ createdAt: new Date() }, () => {
          console.log(this.state.createdAt)
        })
      }

      render() {
        return (
          <div>
            <Timeline>
              <TimelineEvent
                title="John Doe sent a SMS"
                createdAt={this.state.createdAt.toLocaleString()}
                icon={<i className="material-icons md-18">textsms</i>}
                iconColor="#6fba1c"
              >
                This message should appear on a different background
              </TimelineEvent>
            </Timeline>
            <button onClick={this.onClick} style={{margin: 10}}>Refresh Date</button>
          </div>
        )
      }
    }
    return <DynamicTimeline />
  })

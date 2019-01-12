import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'

import { Timeline, TimelineBlip, TimelineEvent } from '../components'
import Image from './sample.jpg'

const globalStyles = {
  backgroundColor: 'rgb(255, 234, 234)',
  height: '100vh',
  fontFamily: 'Roboto'
}

const container = story => <div style={globalStyles}>{story()}</div>

storiesOf('Timeline', module)
  .addDecorator(container)
  .add(
    'Default View',
    () => (
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
        >
          I received the payment for $543. Should be shipping the item within a
          couple of hours. Thanks for the order!
        </TimelineEvent>
        <TimelineEvent
          title='You sent an email to John Doe'
          createdAt='2016-09-11 09:06 AM'
          icon={<i className='material-icons md-18'>email</i>}
          iconColor='#03a9f4'
        >
          <p>Subject: Any updates?</p>
          <p>
            Like we talked, you said that you would share the shipment details?
            This is an urgent order and so I am losing patience. Can you
            expedite the process and pls do share the details asap. Consider
            this a gentle reminder if you are on track already!
          </p>
          <p>- Maya</p>
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Timeline view with sensible defaults' }
  )
  .add(
    'Orientation',
    () => (
      <Timeline orientation='right'>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
        >
          I received the payment for $543. Should be shipping the item within a
          couple of hours. Thanks for the order!
        </TimelineEvent>
        <TimelineEvent
          title='You sent an email to John Doe'
          createdAt='2016-09-11 09:06 AM'
          icon={<i className='material-icons md-18'>email</i>}
          iconColor='#03a9f4'
        >
          <p>Subject: Any updates?</p>
          <p>
            Like we talked, you said that you would share the shipment details?
            This is an urgent order and so I am losing patience. Can you
            expedite the process and pls do share the details asap. Consider
            this a gentle reminder if you are on track already!
          </p>
          <p>- Maya</p>
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Timeline view with the other orientation' }
  )
  .add(
    'Condensed Timeline',
    () => (
      <Timeline>
        <TimelineBlip
          title='Remove PropTypes warning'
          iconStyle={{ marginLeft: 1, marginTop: 0 }}
          icon={<i className='material-icons md-18'>assignment_late</i>}
          iconColor='#03a9f4'
          style={{
            color: '#9c27b0'
          }}
        />
        <TimelineBlip
          title='John starred this thread'
          icon={<i className='material-icons md-18'>grade</i>}
          iconColor='#6fba1c'
        />
      </Timeline>
    ),
    { info: 'Use TimelineBlip to display micro events' }
  )
  .add(
    'Action buttons',
    () => (
      <Timeline>
        <TimelineEvent
          title='You have sent a SMS'
          createdAt='2016-10-02 08:02 AM'
          icon={<i className='material-icons md-18'>textsms</i>}
          buttons={
            <i className='material-icons md-18' style={{ color: '#01579B' }}>
              reply
            </i>
          }
          iconColor='#6fba1c'
        >
          You should be receiving the shipment by tomorrow evening. Please reply
          back if you have more questions
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Checkout the reply button to the top right corner of the event' }
  )
  .add(
    'Content with images',
    () => (
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
        >
          <p>Please check if this image is good for printing</p>
          <img src={Image} />
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'The event can contain any content include media' }
  )
  .add(
    'Card Appearance',
    () => (
      <Timeline>
        <TimelineEvent
          title='Introduction to Redux in React applications'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>event</i>}
          iconColor='#757575'
          buttons={
            <i
              className='material-icons md-24'
              style={{ color: '#FFF', marginTop: -5 }}
            >
              play_circle_filled
            </i>
          }
          container='card'
          style={{
            boxShadow: '0 0 6px 1px #BD3B36',
            border: '1px solid #777',
            borderRadius: 3,
            fontWeight: 400,
            color: '#828282c'
          }}
          cardHeaderStyle={{ backgroundColor: '#8bc34a', color: '#503331' }}
        >
          Card as timeline event with custom container and header styling
        </TimelineEvent>
        <TimelineEvent
          title='Introduction to Redux in React applications'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>event</i>}
          iconColor='#757575'
          buttons={
            <i
              className='material-icons md-24'
              style={{ color: '#FFF', marginTop: -5 }}
            >
              play_circle_filled
            </i>
          }
          container='card'
        >
          A simple card with sensible defaults for styling
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Timeline event container can be modelled as a card' }
  )
  .add(
    'Content Event handlers',
    () => (
      <Timeline>
        <TimelineEvent
          title='John Doe sent you a click bomb'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
          onClick={() => alert('You clicked here!')}
        >
          Clicking this should raise an alert!
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Timeline events can listen to user actions' }
  )
  .add(
    'Icon Event handlers',
    () => {
      class IconEventDemo extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            active: true,
            iconColor: 'red'
          }
          this.toggleEvent = this.toggleEvent.bind(this)
        }

        get icon() {
          return this.state.active ? 'stop' : 'play_arrow'
        }

        toggleEvent() {
          alert('Will toggle event status between play and stop')
          this.setState({
            active: !this.state.active,
            iconColor: this.state.iconColor === 'red' ? 'green' : 'red'
          })
        }

        render() {
          return (
            <Timeline>
              <TimelineEvent
                title="Playing Beethoven's Moonlight Sonata"
                createdAt='2016-09-12 10:06 PM'
                icon={<i className='material-icons md-18'>{this.icon}</i>}
                iconColor={this.state.iconColor}
                onIconClick={this.toggleEvent}
              >
                Press icon on the bubble to stop music
              </TimelineEvent>
            </Timeline>
          )
        }
      }
      return <IconEventDemo />
    },
    { info: 'Timeline events can listen to user actions' }
  )
  .add(
    'Event Styling',
    () => (
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
          style={{
            backgroundColor: '#fff',
            padding: 10,
            boxShadow: '0 0 3px 1px #BD3B36',
            border: '1px solid #eee'
          }}
          contentStyle={{ backgroundColor: '#00BCD4', color: '#fff' }}
        >
          This message should appear on a different background
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'TimelineEvent is completely customizable' }
  )
  .add(
    'Icon and Bubble Styling',
    () => (
      <Timeline lineStyle={{ background: '#999', width: 3 }}>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
          bubbleStyle={{ backgroundColor: '#00ff81' }}
        >
          Notice the style variations to the bubble and icons
        </TimelineEvent>
        <TimelineEvent
          title={'Phone event'}
          createdAt='2016-10-12 12:12 AM'
          icon={<i className='material-icons md-18'>phone</i>}
          iconStyle={{ marginLeft: 1, marginTop: 0 }}
          iconColor='#5C6BC0'
        >
          John called!
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Modify the appearance of bubbles and containing icons' }
  )
  .add(
    'Dynamic Prop Updates DontTest ',
    () => {
      class DynamicTimeline extends Component {
        constructor(props) {
          super(props)
          this.state = {
            createdAt: new Date()
          }
          this.onClick = this.onClick.bind(this)
        }

        onClick() {
          this.setState({ createdAt: new Date() })
        }

        render() {
          return (
            <div>
              <Timeline>
                <TimelineEvent
                  title='John Doe sent a SMS'
                  createdAt={this.state.createdAt.toLocaleString()}
                  icon={<i className='material-icons md-18'>textsms</i>}
                  iconColor='#6fba1c'
                >
                  This message should appear on a different background
                </TimelineEvent>
              </Timeline>
              <button onClick={this.onClick} style={{ margin: 10 }}>
                Refresh Date
              </button>
            </div>
          )
        }
      }
      return <DynamicTimeline />
    },
    { info: 'Props passed to the events are updated in realtime' }
  )
  .add(
    'Title and Subtitle styling',
    () => (
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          subtitle='☞ Needs RSVP'
          subtitleStyle={{ color: '#2962FF' }}
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
        >
          I received the payment for $543. Should be shipping the item within a
          couple of hours. Thanks for the order!
        </TimelineEvent>
        <TimelineEvent
          title='You sent an email to John Doe'
          titleStyle={{ fontWeight: 'bold' }}
          subtitle='✔ Mail delivered'
          subtitleStyle={{ color: 'green' }}
          icon={<i className='material-icons md-18'>email</i>}
          iconColor='#03a9f4'
        >
          Like we talked, you said that you would share the shipment details?
          This is an urgent order and so I am losing patience. Can you expedite
          the process and pls do share the details asap. Consider this a gentle
          reminder if you are on track already!
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Add your own title and subtitle to events' }
  )
  .add(
    'TimelineEvent with collapsible content',
    () => (
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
          collapsible
          showContent
        >
          I received the payment for $543. Should be shipping the item within a
          couple of hours. Thanks for the order!
        </TimelineEvent>
        <TimelineEvent
          title='You sent an email to John Doe'
          createdAt='2016-09-11 09:06 AM'
          icon={<i className='material-icons md-18'>email</i>}
          iconColor='#03a9f4'
          collapsible
        >
          <p>Subject: Any updates?</p>
          <p>
            Like we talked, you said that you would share the shipment details?
            This is an urgent order and so I am losing patience. Can you
            expedite the process and pls do share the details asap. Consider
            this a gentle reminder if you are on track already!
          </p>
          <p>- Maya</p>
        </TimelineEvent>
      </Timeline>
    ),
    { info: 'Make the content collapsible' }
  )

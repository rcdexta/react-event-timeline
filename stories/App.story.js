import React, {Component} from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {Timeline, TimelineEvent, TimelineBlip} from '../components/index'
import Image from './sample.jpg'

const globalStyles = {
  backgroundColor: 'rgb(255, 234, 234)',
  height: '100vh',
  fontFamily: 'Roboto'
}

const container = story =>
  <div style={globalStyles}>
    {story()}
  </div>

storiesOf('Timeline', module)
  .addDecorator(container)
  .add(
    'Default View',
    withInfo('Timeline view with sensible defaults')(() =>
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
        >
          I received the payment for $543. Should be shipping the item within a couple of hours. Thanks for the order!
        </TimelineEvent>
        <TimelineEvent
          title='You sent an email to John Doe'
          createdAt='2016-09-11 09:06 AM'
          icon={<i className='material-icons md-18'>email</i>}
          iconColor='#03a9f4'
        >
          <p>Subject: Any updates?</p>
          <p>
            Like we talked, you said that you would share the shipment details? This is an urgent order and so I am
            losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle
            reminder if you are on track already!
          </p>
          <p>- Maya</p>
        </TimelineEvent>
      </Timeline>
    )
  )
.add(
	'Orientation',
	withInfo('Timeline view with the other orientation')(() =>
		<Timeline orientation='right'>
			<TimelineEvent
				title='John Doe sent a SMS'
				createdAt='2016-09-12 10:06 PM'
				icon={<i className='material-icons md-18'>textsms</i>}
				iconColor='#6fba1c'
			>
				I received the payment for $543. Should be shipping the item within a couple of hours. Thanks for the order!
			</TimelineEvent>
			<TimelineEvent
				title='You sent an email to John Doe'
				createdAt='2016-09-11 09:06 AM'
				icon={<i className='material-icons md-18'>email</i>}
				iconColor='#03a9f4'
			>
				<p>Subject: Any updates?</p>
				<p>
					Like we talked, you said that you would share the shipment details? This is an urgent order and so I am
					losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle
					reminder if you are on track already!
				</p>
				<p>- Maya</p>
			</TimelineEvent>
		</Timeline>
	)
)
  .add(
    'Condensed Timeline',
    withInfo('Use TimelineBlip to display micro events')(() =>
      <Timeline>
        <TimelineBlip
          title='Remove PropTypes warning'
					iconStyle={{marginLeft: 1, marginTop: 0}}
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
    )
  )
  .add(
    'Action buttons',
    withInfo('Checkout the reply button to the top right corner of the event')(() =>
      <Timeline>
        <TimelineEvent
          title='You have sent a SMS'
          createdAt='2016-10-02 08:02 AM'
          icon={<i className='material-icons md-18'>textsms</i>}
          buttons={
            <i className='material-icons md-18' style={{color: '#01579B'}}>
              reply
            </i>
          }
          iconColor='#6fba1c'
        >
          You should be receiving the shipment by tomorrow evening. Please reply back if you have more questions
        </TimelineEvent>
      </Timeline>
    )
  )
  .add(
    'Content with images',
    withInfo('The event can contain any content include media')(() =>
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
    )
  )
  .add(
    'Card Appearance',
    withInfo('Timeline event container can be modelled as a card')(() => {
      return (
        <Timeline>
          <TimelineEvent
            title='Introduction to Redux in React applications'
            createdAt='2016-09-12 10:06 PM'
            icon={<i className='material-icons md-18'>event</i>}
            iconColor='#757575'
            buttons={
              <i className='material-icons md-24' style={{color: '#FFF', marginTop: -5}}>
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
            cardHeaderStyle={{backgroundColor: '#8bc34a', color: '#503331'}}
          >
            Card as timeline event with custom container and header styling
          </TimelineEvent>
          <TimelineEvent
            title='Introduction to Redux in React applications'
            createdAt='2016-09-12 10:06 PM'
            icon={<i className='material-icons md-18'>event</i>}
            iconColor='#757575'
            buttons={
              <i className='material-icons md-24' style={{color: '#FFF', marginTop: -5}}>
                play_circle_filled
              </i>
            }
            container='card'
          >
            A simple card with sensible defaults for styling
          </TimelineEvent>
        </Timeline>
      )
    })
  )
  .add(
    'Event handlers',
    withInfo('Timeline events can listen to user actions')(() => {
      return (
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
      )
    })
  )
  .add(
    'Event Styling',
    withInfo('TimelineEvent is completely customizable')(() =>
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
          style={{backgroundColor: '#fff', padding: 10, boxShadow: '0 0 3px 1px #BD3B36', border: '1px solid #eee'}}
          contentStyle={{backgroundColor: '#00BCD4', color: '#fff'}}
        >
          This message should appear on a different background
        </TimelineEvent>
      </Timeline>
    )
  )
  .add(
    'Icon and Bubble Styling',
    withInfo('Modify the appearance of bubbles and containing icons')(() =>
      <Timeline lineColor='magenta'>
        <TimelineEvent
          title='John Doe sent a SMS'
          createdAt='2016-09-12 10:06 PM'
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
          bubbleStyle={{backgroundColor: '#00ff81'}}
        >
          Notice the style variations to the bubble and icons
        </TimelineEvent>
        <TimelineEvent
          title={'Phone event'}
          createdAt='2016-10-12 12:12 AM'
          icon={<i className='material-icons md-18'>phone</i>}
          iconStyle={{marginLeft: 1, marginTop: 0}}
          iconColor='#5C6BC0'
        >
          John called!
        </TimelineEvent>
      </Timeline>
    )
  )
  .add(
    'Dynamic Prop Updates',
    withInfo('Props passed to the events are updated in realtime')(() => {
      class DynamicTimeline extends Component {
        constructor(props) {
          super(props)
          this.state = {
            createdAt: new Date()
          }
          this.onClick = this.onClick.bind(this)
        }

        onClick() {
          this.setState({createdAt: new Date()})
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
              <button onClick={this.onClick} style={{margin: 10}}>
                Refresh Date
              </button>
            </div>
          )
        }
      }
      return <DynamicTimeline />
    })
  )
  .add(
    'Title and Subtitle styling',
    withInfo('Add your own title and subtitle to events')(() =>
      <Timeline>
        <TimelineEvent
          title='John Doe sent a SMS'
          subtitle='☞ Needs RSVP'
          subtitleStyle={{color: '#2962FF'}}
          icon={<i className='material-icons md-18'>textsms</i>}
          iconColor='#6fba1c'
        >
          I received the payment for $543. Should be shipping the item within a couple of hours. Thanks for the order!
        </TimelineEvent>
        <TimelineEvent
          title='You sent an email to John Doe'
          titleStyle={{fontWeight: 'bold'}}
          subtitle='✔ Mail delivered'
          subtitleStyle={{color: 'green'}}
          icon={<i className='material-icons md-18'>email</i>}
          iconColor='#03a9f4'
        >
          Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing
          patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if
          you are on track already!
        </TimelineEvent>
      </Timeline>
    )
  )

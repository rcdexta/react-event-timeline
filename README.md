#react-event-timeline

A react component to generate a responsive event-timeline

![alt tag](https://github.com/rcdexta/react-event-timeline/raw/master/timeline.png)

See the storybook demo here:

## Features

* It's lightweight
* Responsive and extensible

## Getting started

```
npm install --save react-event-timeline
```

## Usage

The following snippet generates the timeline you see in the demo:

```jsx
import {Timeline, TimelineEvent} from '../components/index'

ReactDOM.render(
    <Timeline>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           icon={<i className="material-icons md-18">textsms</i>}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
    </Timeline>,
      document.getElementById('container')
);
```

## API Documentation

### Timeline

This is the wrapper component that creates the infinite vertical timeline

| Name      | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| className | string | The css class name of the root timeline element |
| style     | object | Override the inline styles of the timeline element |

### TimelineEvent

Each event in the timeline will be represented by the `TimelineEvent` component. There can be multiple repeating instances of this component inside Timeline wrapper

| Name      | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| title     | node   | The title of the event. Can be string or any DOM element node(s) |
| createdAt | node   | The time at which the event occurred. Can be datetime string or any DOM element node(s) |
| icon      | node   | The icon to show as event lable. Can be a SVG or font icon |
| iconColor | string | CSS color code for icon                  |
| buttons   | node   | Action buttons to display to the right of the event content |

### License

MIT

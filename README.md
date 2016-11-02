#react-event-timeline

A react component to generate a responsive event-timeline

[![Build Status](https://travis-ci.org/rcdexta/react-event-timeline.svg?branch=master)](https://travis-ci.org/rcdexta/react-event-timeline)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![alt tag](https://github.com/rcdexta/react-event-timeline/raw/master/timeline.png)

See the storybook demo here: https://rcdexta.github.io/react-event-timeline

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

Please refer to [story description](https://github.com/rcdexta/react-event-timeline/blob/master/stories/App.story.js) to check out code for all the examples in the storybook

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

### Development

This project recommends using [react-storybook](https://github.com/kadirahq/react-storybook) as a UI component development environment. Use the following scripts for your development workflow:

1. `npm run storybook`: Start developing by using storybook
1. `npm run lint` : Lint all js files
1. `npm run lintfix` : fix linting errors of all js files
1. `npm run build`: transpile all ES6 component files into ES5(commonjs) and put it in `dist` directory
1. `npm run docs`: create static build of storybook in `docs` directory that can be used for github pages

The storybook artefacts can be found in `stories` folder. Run `npm run storybook` and you should see your code changes live reloaded on the browser
 
Also use [semantic-release](https://github.com/semantic-release/semantic-release) to automate release to npm. Use `npm run commit` to commit your changes and then `npm run semantic-release` to automate deployment and publishing to npm repository. 

### License

MIT

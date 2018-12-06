import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'

addDecorator(
  withOptions({
    name: 'react event timeline',
    url: 'https://github.com/rcdexta/react-event-timeline',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false
  })
)

addDecorator(
  withInfo({
    header: false,
    inline: true,
    source: true,
    propTables: false
  })
)

function loadStories() {
  require('../stories/App.story')
}

configure(loadStories, module)

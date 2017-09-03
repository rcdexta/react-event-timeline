import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'
import {setDefaults} from '@storybook/addon-info'

setOptions({
  name: 'react event timeline',
  url: 'https://github.com/rcdexta/react-event-timeline',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
})

setDefaults({
  header: false,
  inline: true,
  source: true,
  propTables: false
})

function loadStories() {
  require('../stories/App.story')
}

configure(loadStories, module)

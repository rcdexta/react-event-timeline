import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'

setOptions({
  name: 'react event timeline',
  url: 'https://github.com/rcdexta/react-event-timeline',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
});


function loadStories () {
  require('../stories/App.story');
}

configure(loadStories, module);

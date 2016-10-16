import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'react event timeline',
  url: 'https://github.com/rcdexta/react-event-timeline',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false
});

function loadStories () {
  require('../stories/App.story');
}

configure(loadStories, module);

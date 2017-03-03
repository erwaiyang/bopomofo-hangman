import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/BopomofoFrame.story.js');
}

configure(loadStories, module);

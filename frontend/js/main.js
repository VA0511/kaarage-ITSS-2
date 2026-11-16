// App entry point: mounts each screen into #app and starts the router.

import { registerScreen, startRouter, onNavigate } from './core/router.js';
import { SCREEN_TITLES } from './core/routes.js';
import home from './screens/s01-home.js';
import lookup from './screens/s02-lookup.js';
import review from './screens/s03-review.js';
import express from './screens/s04-express.js';
import suggest from './screens/s05-suggest.js';

const SCREENS = [home, lookup, review, express, suggest];
const APP_NAME = 'KARAAGE Lexicon';

function init() {
  const outlet = document.getElementById('app');

  SCREENS.forEach((screen) => {
    const el = document.createElement('section');
    el.className = 'screen';
    el.dataset.screen = screen.id;
    el.hidden = true;
    outlet.append(el);
    screen.mount(el);
    registerScreen(screen.id, el, screen);
  });

  onNavigate((id) => {
    document.title = id === 'S01' ? APP_NAME : `${SCREEN_TITLES[id]} · ${APP_NAME}`;
  });

  startRouter();
}

init();

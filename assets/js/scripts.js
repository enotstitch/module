import { initHeader } from './modules/header/header.js';
import { initSliders } from './scripts/sliders.js';
import { Spollers } from './modules/spollers/spollers.js';

initHeader();
initSliders();

new Spollers('questions-spollers');

import { initHeader } from './modules/header/header.js';
import { initSliders } from './scripts/sliders.js';
import { Spollers } from './modules/spollers/spollers.js';
import { tabs } from './modules/tabs/tabs.js';

initHeader();
initSliders();

new Spollers('questions-spollers');
new Spollers('vacancies-spollers');

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs('.products-tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');

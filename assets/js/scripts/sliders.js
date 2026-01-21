import { Swiper, Navigation, Pagination } from '../libs.js';

export function initSliders() {
	new Swiper('.partners-slider', {
		modules: [Navigation, Pagination],
		slidesPerView: 6,
		spaceBetween: 20,

		breakpoints: {
			0: {
				slidesPerView: 3,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: false,
			},
			769: {
				slidesPerView: 4,
				pagination: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
			992: {
				slidesPerView: 6,
				pagination: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
		},
	});
}

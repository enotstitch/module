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
					el: '.partners__pagination',
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

	new Swiper('.projects-slider', {
		modules: [Navigation, Pagination],
		slidesPerView: 3,
		spaceBetween: 40,

		breakpoints: {
			0: {
				slidesPerView: 1,
				pagination: {
					el: '.projects__pagination',
					clickable: true,
				},
				navigation: false,
			},
			769: {
				slidesPerView: 2,
				pagination: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
			1200: {
				slidesPerView: 3,
				pagination: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
		},
	});
}

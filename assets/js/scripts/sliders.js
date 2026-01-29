import { Swiper, Navigation, Pagination } from '../libs.js';

let newsSlider;
let applicationSlider;

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
					nextEl: '.partners__nav--next',
					prevEl: '.partners__nav--prev',
				},
			},
			992: {
				slidesPerView: 6,
				pagination: false,
				navigation: {
					nextEl: '.partners__nav--next',
					prevEl: '.partners__nav--prev',
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
				pagination: {
					el: '.projects__pagination',
					clickable: true,
				},
				navigation: false,
			},
			992: {
				slidesPerView: 2,
				pagination: false,
				navigation: {
					nextEl: '.projects__nav--next',
					prevEl: '.projects__nav--prev',
				},
			},
			1200: {
				slidesPerView: 3,
				pagination: false,
				navigation: {
					nextEl: '.projects__nav--next',
					prevEl: '.projects__nav--prev',
				},
			},
		},
	});

	if (window.innerWidth <= 1400 && !newsSlider) {
		newsSlider = new Swiper('.news-slider', {
			modules: [Navigation, Pagination],
			slidesPerView: 3,
			spaceBetween: 20,
			navigation: {
				nextEl: '.news__nav--next',
				prevEl: '.news__nav--prev',
			},
			pagination: {
				el: '.news__pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					pagination: {
						el: '.news__pagination',
						clickable: true,
					},
					navigation: false,
				},
				769: {
					slidesPerView: 2,
					pagination: {
						el: '.news__pagination',
						clickable: true,
					},
					navigation: false,
				},
				992: {
					slidesPerView: 2,
					pagination: false,
					navigation: {
						nextEl: '.news__nav--next',
						prevEl: '.news__nav--prev',
					},
				},
				1200: {
					slidesPerView: 3,
					pagination: false,
					navigation: {
						nextEl: '.news__nav--next',
						prevEl: '.news__nav--prev',
					},
				},
			},
		});
	}

	if (window.innerWidth > 1400 && newsSlider) {
		newsSlider.destroy(true, true);
		newsSlider = null;
	}

	if (window.innerWidth <= 1400 && !applicationSlider) {
		applicationSlider = new Swiper('.application-slider', {
			modules: [Navigation, Pagination],
			slidesPerView: 3,
			spaceBetween: 20,
			navigation: {
				nextEl: '.application__nav--next',
				prevEl: '.application__nav--prev',
			},
			pagination: {
				el: '.application__pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					pagination: {
						el: '.application__pagination',
						clickable: true,
					},
					navigation: false,
				},
				769: {
					slidesPerView: 2,
					pagination: {
						el: '.application__pagination',
						clickable: true,
					},
					navigation: false,
				},
				992: {
					slidesPerView: 2,
					pagination: false,
					navigation: {
						nextEl: '.application__nav--next',
						prevEl: '.application__nav--prev',
					},
				},
				1200: {
					slidesPerView: 3,
					pagination: false,
					navigation: {
						nextEl: '.application__nav--next',
						prevEl: '.application__nav--prev',
					},
				},
			},
		});
	}

	if (window.innerWidth > 1400 && applicationSlider) {
		applicationSlider.destroy(true, true);
		applicationSlider = null;
	}
}

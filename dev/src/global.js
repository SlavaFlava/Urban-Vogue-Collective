// vendor
window.Flickity = require('flickity');
require('flickity-imagesloaded');
require('flickity-fullscreen');
require('flickity-as-nav-for');
require('lazysizes');

// modules
window.PubSub = require('./scripts/pubsub');

function debounce(fn, wait) {
	let t;
	return (...args) => {
		clearTimeout(t);
		t = setTimeout(() => fn.apply(this, args), wait);
	};
}



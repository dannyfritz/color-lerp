'use strict';
var Color = require('color');
var lerp = require('lerp');
var _ = require('lodash-fp')
	.runInContext()
	.mixin(require('funcdash/curried'));

var getColorString = {
	'hex': _.result('hexString'),
	'rgb': _.result('rgbString'),
	'rgba': _.result('rgbaString'),
	'percent': _.result('percentString'),
	'%': _.result('percentString'),
	'hsl': _.result('hslString'),
	'hsla': _.result('hslaString'),
	'hwb': _.result('hwbString'),
	'': _.identity
};

function lerpColors (color1, color2, weight) {
	return Color({
		h: lerp(color1.hue(), color2.hue(), weight),
		s: lerp(color1.saturation(), color2.saturation(), weight),
		l: lerp(color1.lightness(), color2.lightness(), weight),
		a: lerp(color1.alpha(), color2.alpha(), weight)
	});
}

module.exports = function (color1, color2, steps, format) {
	if (!_.isString(color1)) {
		throw new Error('Expected color1 to be a String');
	}
	if (!_.isString(color2)) {
		throw new Error('Expected color2 to be a String');
	}
	if (!_.isNumber(steps)) {
		throw new Error('Expected steps to be a Number');
	}
	if (!_.isString(format)) {
		format = 'hsl';
	}
	color1 = Color(color1);
	color2 = Color(color2);
	return _(_.range(0, steps))
		.map(function (value) {
			var weight = value / (steps - 1);
			return weight;
		})
		.map(function (weight) {
			return lerpColors(color1, color2, weight);
		})
		.map(getColorString[format.toLowerCase()])
		.value();
};

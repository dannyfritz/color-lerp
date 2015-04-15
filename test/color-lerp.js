'use strict';
var test = require('tape');
var Color = require('color');
var fillColorGaps = require('../');

test('basic test', function (t) {
	t.plan(1);
	var input, expected, output;
	input = ['hsl(0, 50%, 50%)', 'hsl(100, 50%, 50%)', 2];
	expected = ['hsl(0, 50%, 50%)', 'hsl(100, 50%, 50%)'];
	output = fillColorGaps(input[0], input[1], input[2]);
	t.deepEqual(output, expected, 'Expected same colors back.');
});

test('simple lerp test', function (t) {
	t.plan(1);
	var input, expected, output;
	input = ['hsl(0, 50%, 50%)', 'hsl(100, 50%, 50%)', 3];
	expected = ['hsl(0, 50%, 50%)', 'hsl(50, 50%, 50%)', 'hsl(100, 50%, 50%)'];
	output = fillColorGaps(input[0], input[1], input[2]);
	t.deepEqual(output, expected, 'Expected lerped value.');
});

test('advanced lerp test', function (t) {
	t.plan(1);
	var input, expected, output;
	input = ['hsl(0, 100%, 40%)', 'hsl(100, 0%, 60%)', 3];
	expected = ['hsl(0, 100%, 40%)', 'hsl(50, 50%, 50%)', 'hsl(100, 0%, 60%)'];
	output = fillColorGaps(input[0], input[1], input[2]);
	t.deepEqual(output, expected, 'Expected lerped values.');
});

test('advanced multi-lerp test', function (t) {
	t.plan(1);
	var input, expected, output;
	input = ['hsl(0, 100%, 50%)', 'hsl(100, 100%, 50%)', 4];
	expected = ['hsl(0, 100%, 50%)', 'hsl(33, 100%, 50%)', 'hsl(67, 100%, 50%)', 'hsl(100, 100%, 50%)'];
	output = fillColorGaps(input[0], input[1], input[2]);
	t.deepEqual(output, expected, 'Expected lerped values.');
});

test('rgb color format', function (t) {
	t.plan(1);
	var input, expected, output;
	input = ['#FF0000', '#00FF00', 2, 'rgb'];
	expected = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)'];
	output = fillColorGaps(input[0], input[1], input[2], input[3]);
	t.deepEqual(output, expected, 'Expected same colors back in rgb.');
});

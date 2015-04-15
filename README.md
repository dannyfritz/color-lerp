[![MIT](https://img.shields.io/npm/l/color-lerp.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/color-lerp.svg?style=flat-square)](https://www.npmjs.com/package/color-lerp)

# color-lerp

Creates arbitrary size ranges of colors given 2 colors and a size.

## Installation

```bash
$ npm install color-lerp -S
```

## Usage

Turn 2 colors into a spectrum of 3 colors.

```js
var colorLerp = require('color-lerp');
colorLerp('hsl(0, 50%, 50%)', 'hsl(100, 50%, 50%)', 3);
// => ['hsl(0, 50%, 50%)', 'hsl(50, 50%, 50%)', 'hsl(100, 50%, 50%)'];
```

Return the results in `RGB` instead of `HSL`.
```js
var colorLerp = require('color-lerp');
colorLerp('#FF0000', '#00FF00', 2, 'rgb');
// => ['rgb(255, 0, 0)', 'rgb(0, 255, 0)'];
```

## API

### colorLerp(color1, color2, steps, [format='hsl']) -> range

#### `color1`:`String` & `color2`:`String`

Any valid input for the [color](https://www.npmjs.com/package/color) package.
> Pass any valid CSS color string or a hash of values.

#### `steps`:`Number`

The size the range should be.
A value of 2 will return the 2 colors given.
A size of 3 will interpolate a single value between the 2 colors given.
A size of *n* will create a range of size *n*
	beginning with *color1* and ending with *color2*
	with linearly interpolated values over the HSL space in between.

#### `format`:`String`

The format you want the colors returned.
Defaults to HSL.

Valid formats:
* `hex` *ex. #ff0000*
* `rgb` *ex. rgb(255, 0, 0)*
* `rgba` *ex. rgba(255, 0, 0, 1)*
* `percent` *ex. rgb(100%, 0%, 0%)*
* `%` *ex. rgb(100%, 0%, 0%)*
* `hsl` *ex. hsl(255, 100%, 50%)*
* `hsla` *ex. hsla(255, 100%, 50%, 1)*
* `hwb` *ex. hwb(0, 0%, 0%)*
* `color` *ex. color Object*

#### `range`:`Array`

The resulting array from interpolating the values.

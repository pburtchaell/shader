# shader [![npm version](https://badge.fury.io/js/shader.svg)](http://badge.fury.io/js/shader) [![Dependency Status](https://david-dm.org/pburtchaell/shader.svg)](https://david-dm.org/pburtchaell/shader)


## Overview

Creates darker or lighter shades of a hex color. Inspired by [a question](http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors) on StackOverflow.

## Installation

Install with npm.

```
npm install shader
```

## Usage

```
var shader = require('shader');

var newShade = shader(color, value);
```

### Parameters

| param | type   | description                                       |
|-------|--------|---------------------------------------------------|
| color | string | the seven character hex code for the color        |
| value | number | a range from `-1.0` (darkest) to `1.0` (lightest) |

**Note:** The color input must be *exactly* 6 characters, e.g., `#08a35c`.

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell).

Copyright 2015 Patrick Burtchaell. Licensed MIT.


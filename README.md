# Color Shader

[![npm version](https://img.shields.io/npm/v/shader.svg?style=flat)](https://www.npmjs.com/package/shader) [![Build Status](https://travis-ci.org/pburtchaell/shader.svg?branch=master)](https://travis-ci.org/pburtchaell/shader) [![npm downloads](https://img.shields.io/npm/dm/shader.svg?style=flat)](https://www.npmjs.com/package/shader)

Creates darker or lighter shades of a hex color. Originally inspired from [a question](http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors) on StackOverflow.

## Installation

Install with npm.

```
npm install shader
```

## Usage

```
import shader from 'shader';

const color = '#fff';
const myNewShade = shader(color, -1.0);
```

### Parameters

| param | type   | description                                       |
|-------|--------|---------------------------------------------------|
| color | string | the hex code for the color        |
| value | int | a range from `-1.0` (darkest) to `1.0` (lightest) |

---
Copyright 2015-2017 Patrick Burtchaell. Licensed MIT.

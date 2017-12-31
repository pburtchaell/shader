/**
 * Function: shader
 * Description: Takes a hex code color and makes it ligher or darker.
 */
function shader (color, percent) {
  const parseStrIndex = 16;
  const sliceStrIndex = 1;

  // Throw an error for colors
  if ((percent != 0) && (percent > 1.0 || -1.0 > percent)) {
    throw new Error(`Color Shader Error: unable shade accurately "${color}" by "${percent}" amount. The amount must be less than 1.0 and greater than -1.0.`);
  }

  let f;

  // Handle different string lengths
  switch (color.length) {

    // In the case of a 3 char string like fff...
    // ...then double the chars and parse the hex.
    case 3:
      color = color + color;
      f = parseInt(color, parseStrIndex);
      break;

    // In the case of a 4 char string like #fff...
    // ...then remove the hash, double the chars and parse the hex.
    case 4:
      color = color.slice(sliceStrIndex);
      color = color + color;
      f = parseInt(color, parseStrIndex);
      break;

    // In the case of a 7 char string like #ffffff,
    // ...then remove the hash and parse the hex.
    case 7:
      f = parseInt(color.slice(sliceStrIndex), parseStrIndex);
      break;

    // In the case of a 6 char string like ffffff...
    // ...then parse the hex without doing anything.
    default:
      f = parseInt(color, parseStrIndex);
      break;
  }

  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent *- 1 : percent;

  // Old RGB values
  const r = f >> 16
  const g = f >> 8 & 0x00FF
  const b = f & 0x0000FF

  // Return new hex code
  return `#${
    (
      0x1000000 + (Math.round((t - r) * p) + r) * 0x10000 +
      (Math.round((t - g) * p) + g) * 0x100 +
      (Math.round((t - b) * p) + b)
    ).toString(16).slice(1)
  }`;
}

module.exports = shader;

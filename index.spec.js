const shader = require('./index.js');

test('shades 3 digit hex codes', () => {
  expect(shader('fff', -0.5)).toBe('#808080');
  expect(shader('fff', 0.5)).toBe('#ffffff');
});

test('shades 3 digit hex codes', () => {
  expect(shader('#fff', -0.5)).toBe('#808080');
  expect(shader('#fff', 0.5)).toBe('#ffffff');
});

test('shades 6 digit hex codes', () => {
  expect(shader('3f83a3', -1)).toBe('#000000');
  expect(shader('3f83a3', 0)).toBe('#3f83a3');
  expect(shader('3f83a3', 1)).toBe('#ffffff');
});

test('shades 7 digit hex codes', () => {
  expect(shader('#3f83a3', -1)).toBe('#000000');
  expect(shader('#3f83a3', 0)).toBe('#3f83a3');
  expect(shader('#3f83a3', 1)).toBe('#ffffff');
});

test('throws errors for invalid amounts', () => {
  expect(() => shader('#e0e0e0', 1.1)).toThrow();
  expect(() => shader('#e0e0e0', -1.1)).toThrow();
});

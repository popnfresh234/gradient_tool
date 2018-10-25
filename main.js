import createColors from './colors.js';

const MAX_COLORS = 2 ** 11;
const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const myCanvas = document.getElementById('canvas');
myCanvas.width = CANVAS_WIDTH;
myCanvas.height = CANVAS_HEIGHT;
const context = myCanvas.getContext('2d');

const DEFAULT_COLORS = [
  { r: 0, g: 7, b: 100 },
  { r: 32, g: 107, b: 203 },
  { r: 237, g: 255, b: 255 },
  { r: 255, g: 170, b: 0 },
  { r: 0, g: 2, b: 0 },

];

const TEST_COLOR =
[
  { r: 14, g: 0, b: 0 },
  { r: 176, g: 0, b: 0 },
  { r: 237, g: 255, b: 255 },
  { r: 102, g: 50, b: 0 },
  { r: 0, g: 0, b: 0 },

];


const colors = createColors(MAX_COLORS, TEST_COLOR);
colors.forEach((color, index) => {
  context.beginPath();
  context.moveTo(index, 0);
  context.lineTo(index, CANVAS_HEIGHT);
  context.strokeStyle = color;
  context.stroke();
});

const WIDTH = 600;
const HEIGHT = 200;
const DPI_WIDTH = 600 * 2;
const DPI_HEIGHT = 200 * 2;
const ROWS_COUNT = 5;
const PADDING = 40;
const VIEW_HEIGHT = DPI_HEIGHT - PADDING * 2;

const data = [
  [0, 0],
  [200, 200],
  [300, 50],
  [500, 350],
];

const step = VIEW_HEIGHT / ROWS_COUNT;

const chart = (canvas, data) => {
  var ctx = canvas.getContext("2d");
  canvas.style.width = WIDTH + "px";
  canvas.style.height = HEIGHT + "px";
  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;

  ctx.beginPath();
  ctx.fillStroke = "#bbb";
  ctx.fillStyle = "#96a2aa";
  ctx.font = "normal 16px sans-serif";
  for (let i = 1; i <= ROWS_COUNT; i++) {
    const y = i * step;

    ctx.fillText(DPI_HEIGHT - y, 0, y + PADDING - 10);
    ctx.moveTo(0, y + PADDING);
    ctx.lineTo(DPI_WIDTH, y + PADDING);
  }
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";

  for (let [x, y] of data) {
    ctx.lineTo(x, DPI_HEIGHT - PADDING - y);
  }
  ctx.stroke();
  ctx.closePath();
};

chart(document.getElementById("chart"), data);

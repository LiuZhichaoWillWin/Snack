import { Snack, SnackPart } from "../typings/snack";

export function drawSnackPart(snackPart: SnackPart, cxt: CanvasRenderingContext2D) {
  cxt.strokeRect(snackPart.x, snackPart.y, 10, 10);
  cxt.fillRect(snackPart.x, snackPart.y, 10, 10);
}

export function drawSnack(snack: Snack, gameCanvas: HTMLCanvasElement) {
  const cxt = gameCanvas.getContext('2d') as CanvasRenderingContext2D;
  cxt.fillStyle = 'skyblue';
  cxt.clearRect(0, 0,gameCanvas.width, gameCanvas.height);
  cxt.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  snack.shape.forEach((snackPart: SnackPart, index) => {
    cxt.fillStyle = 'blueviolet';
    cxt.strokeStyle = 'darkgreen';
    if (index === 0) {
      cxt.fillStyle = 'red';
      drawSnackPart(snackPart, cxt);
    }
    else 
      drawSnackPart(snackPart, cxt);
  });
}
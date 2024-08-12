import { Snack, Food } from '../typings/snack';
function randomTen(min: number, max: number) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

export function createFood(snack: Snack, gameCanvas: HTMLCanvasElement) {
  const food: Food = { 
    x: randomTen(0, gameCanvas.width - 10),
    y: randomTen(0, gameCanvas.height - 10)
  }
  let isOnSnack = false;
  snack.shape.forEach((snackPart) => {
    if (snackPart.x === food.x && snackPart.y === food.y) {
      isOnSnack = true;
      return;
    }
  })
  if (isOnSnack) return createFood(snack, gameCanvas);
  else return food;
}
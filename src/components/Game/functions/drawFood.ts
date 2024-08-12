import { Food } from "../typings/snack";

export function drawFood(food: Food, gameCanvas: HTMLCanvasElement) {
  const cxt = gameCanvas.getContext('2d') as CanvasRenderingContext2D;
  cxt.save();
  cxt.fillStyle = 'green';
  cxt.fillRect(food.x, food.y, 10, 10);
  cxt.restore();
}
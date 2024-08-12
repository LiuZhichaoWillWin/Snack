import { SnackPart, Snack } from "../typings/snack";

export function boostSnack(snack: Snack) {
  const dx: number = 10;
  const dy: number = 10;
  const tail: SnackPart = { x: 0, y: 0 };
  const last = snack.shape.length - 1;
  // 确定方向
  if (snack.shape[last - 1].x === snack.shape[last].x && snack.shape[last - 1].y < snack.shape[last].y) {
    tail.x = snack.shape[last].x; 
    tail.y = snack.shape[last].y + dy;
  }
  if (snack.shape[last - 1].x === snack.shape[last].x && snack.shape[last - 1].y > snack.shape[last].y) {
    tail.x = snack.shape[last].x; 
    tail.y = snack.shape[last].y - dy;
  }
    
  if (snack.shape[last - 1].x < snack.shape[last].x && snack.shape[last - 1].y === snack.shape[last].y) {
    tail.x = snack.shape[last].x + dx; 
    tail.y = snack.shape[last].y;
  }
  if (snack.shape[last - 1].x > snack.shape[last].x && snack.shape[last - 1].y === snack.shape[last].y) {
    tail.x = snack.shape[last].x - dx; 
    tail.y = snack.shape[last].y;
  }
  snack.shape.push(tail);
}
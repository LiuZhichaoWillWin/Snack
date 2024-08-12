import { Snack, SnackPart } from "../typings/snack";
import { directions } from "../const/direactions";
export function advanceSnack(snack: Snack, direction: string) {
  const dx: number = 10;
  const dy: number = 10;

  let head: SnackPart;
  if (direction === directions.RIGHT) {
    head = { x: snack.shape[0].x + dx, y: snack.shape[0].y };
  }
  else if (direction === directions.LEFT) {
    head = { x: snack.shape[0].x - dx, y: snack.shape[0].y };
  }
  else if (direction === directions.UP) {
    head = { x: snack.shape[0].x, y: snack.shape[0].y - dy };
  }
  else {
    head = { x: snack.shape[0].x, y: snack.shape[0].y + dy };
  }
  snack.shape.unshift(head);
  snack.shape.pop();
}
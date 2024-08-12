import { useSnackStore } from "../../../stores/snackStore";
import { Snack } from "../typings/snack";

export function checkFail(snack: Snack, canvasWid: number, canvasHei: number): void {
  const snackStore = useSnackStore();
  // console.log(snack.shape);
  if (snack.shape[0].x >= canvasWid || snack.shape[0].x < 0 || snack.shape[0].y >= canvasHei || snack.shape[0].y < 0) {
    snackStore.isAlive = false;
    return;
  }

  for (let i = 0; i < snack.shape.length - 1; i ++) {
    for (let j = i + 1; j < snack.shape.length; j ++) {
      if (snack.shape[i].x === snack.shape[j].x && snack.shape[i].y === snack.shape[j].y) {
        snackStore.isAlive = false;
        return;
      }
    }
  }
}
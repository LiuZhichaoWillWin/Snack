import { Snack } from "../typings/snack";
import { directions } from "../const/direactions";

export function watchKeydown(snack: Snack) {
  let isSuccessful = false;
  function changeDirection(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' && snack.direction !== directions.DOWN) {
      snack.direction = directions.UP;
      isSuccessful = true;
    }
    else if (event.key === 'ArrowDown' && snack.direction !== directions.UP) {
      snack.direction = directions.DOWN;
      isSuccessful = true;
    }
    else if (event.key === 'ArrowLeft' && snack.direction !== directions.RIGHT) {
      snack.direction = directions.LEFT;
      isSuccessful = true;
    }
    else if (event.key === 'ArrowRight' && snack.direction !== directions.LEFT) {
      snack.direction = directions.RIGHT;
      isSuccessful = true;
    }
    if (isSuccessful) {
      window.removeEventListener('keydown', changeDirection);
    }
  }
  window.addEventListener('keydown', changeDirection);
}
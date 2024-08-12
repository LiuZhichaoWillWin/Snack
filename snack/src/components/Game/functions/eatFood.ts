import { Food, Snack } from "../typings/snack";

export function eatFood(snack: Snack, food: Food): boolean {
  if (snack.shape[0].x === food.x && snack.shape[0].y === food.y)
    return true;
  else
    return false;
}
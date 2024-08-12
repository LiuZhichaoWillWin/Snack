import { directions } from '../const/direactions';
declare export type SnackPart = { x: number, y: number };
declare export type Food = SnackPart;
declare export type Snack = {
  direction: string;
  shape: SnackPart[];
}

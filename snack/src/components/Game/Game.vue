<script setup lang='ts'>
import {  onMounted, ref } from 'vue';
import { Snack } from './typings/snack';
import { drawSnack } from './functions/drawSnack';
import { directions } from './const/direactions';
import { advanceSnack } from './functions/advanceSnack';
import { checkFail } from './functions/checkFail';
import { useSnackStore } from '../../stores/snackStore';
import { watchKeydown } from './functions/watchKeydown';
import { createFood } from './functions/createFood';
import { drawFood } from './functions/drawFood';
import { eatFood } from './functions/eatFood';
import { boostSnack } from './functions/boostSnack';

const gameCanvasRef = ref();
const snackStore = useSnackStore();
const score = ref(0);

onMounted(() => {
  const gameCanvas: HTMLCanvasElement | null = gameCanvasRef.value;
  
  if (gameCanvas?.getContext) {
    gameCanvas.width = 300;
    gameCanvas.height = 300;
    // 画蛇
    const snack: Snack = {
      direction: directions.RIGHT,
      shape: [
      { x: 180, y: 150 },
      { x: 170, y: 150 },
      { x: 160, y: 150 },
      { x: 150, y: 150 },
      { x: 140, y: 150 },
      { x: 130, y: 150 }]
    };
    // 监听按键
    watchKeydown(snack);
    // 第一次画蛇和食物
    let food = createFood(snack, gameCanvas);
    drawSnack(snack, gameCanvas);
    drawFood(food, gameCanvas);

    // 蛇移动的速度
    let duration: number = 500;
    let dLen = 0;

    setTimeout(function render(): void {
      advanceSnack(snack, snack.direction);
      checkFail(snack, gameCanvas.width, gameCanvas.height);
      if (snackStore.isAlive === false) {
        // const reStartBtn: HTMLElement | null = document.querySelector('.btn');
        return;
      }
      drawSnack(snack, gameCanvas);
      drawFood(food, gameCanvas);
      if (eatFood(snack, food)) {
        food = createFood(snack, gameCanvas);
        boostSnack(snack);
        score.value += 10;
        dLen ++;
        if (dLen === 5) dLen = 0;
        if (duration > 100) duration -= dLen * 10;
      }
      watchKeydown(snack);
      setTimeout(render, duration);
    }, duration);
  }
});



</script>

<template>
<div class="gameInterface">
  <canvas ref="gameCanvasRef"></canvas>
  <div class="score"><h2>得分：{{ score }}</h2></div>
</div> 
</template>

<style scoped>
.gameInterface {
  display: flex;
  flex-direction: column;
  .score {
    display: flex;
    justify-content: center;
  }
}
</style>
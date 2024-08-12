<script setup lang='ts'>
import { ref, VNodeRef } from 'vue';
import Game from './components/Game/Game.vue';
import Fail from './components/Fail/Fail.vue';
import { useSnackStore } from './stores/snackStore';

const startInterface = ref<null | VNodeRef>(null);
const isStarted = ref<boolean>(false);

const snackStore = useSnackStore();

function startGame(): void {
  if (startInterface.value) {
    isStarted.value = true;
  }
}

</script>

<template>
<div class="wrapper">
  <div class="start" 
    ref="startInterface" 
    :style="{
      display: isStarted ? 'none': 'flex'
    }">
    <h1>Welcome to Snack!</h1>
    <button class="btn" @click="startGame">start</button>
  </div>
  <Game v-if="isStarted"></Game>
  <Fail v-if="!snackStore.isAlive" class="failInterface" v-model:isStarted="isStarted"></Fail>
</div>
</template>

<style scoped>
.wrapper {
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .start {
    width: 40%;
    height: 30%;
    margin: 0 auto;
    border: 3px solid blueviolet;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      width: 40%;
      height: 20%;
      border-radius: 10px;
      background-color: blueviolet;
      font-size: 20px;
      cursor: pointer;
    }
  }
  & {
    position: relative;
    .failInterface {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
  
</style>
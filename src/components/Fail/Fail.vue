<script setup lang='ts'>
import { useSnackStore } from '../../stores/snackStore';
import { defineModel } from 'vue';
const snackStore = useSnackStore();
const isStartedRef = defineModel('isStarted');
setInterval(() => {
  console.log(isStartedRef.value);
}, 1000);
function changeState() {
  snackStore.changeSnackState();
  isStartedRef.value = false;
}
</script>

<template>
<div class="failInterface">
  <h1>游戏失败</h1>
  <button class="btn" @click="changeState">重新开始</button>
</div>
</template>

<style scoped>
.failInterface {
  height: 25%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn {
    width: 50%;
    height: 25%;
    border-radius: 10px;
    background-color: blueviolet;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
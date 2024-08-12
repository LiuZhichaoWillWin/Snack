import { defineStore } from 'pinia';

const useSnackStore = defineStore('snackState', {
  state: () => ({
    isAlive: true
  }),
  actions: {
    changeSnackState() {
      this.isAlive = !this.isAlive;
    }
  }
});

export { useSnackStore };
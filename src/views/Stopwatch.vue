<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-4xl mb-4">{{ formatTime(timeElapsed) }}</div>
    <div class="space-x-4">
      <button v-if="state === 'stopped'"  @click="start" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Start</button>
      <button v-if="state === 'running'" @click="pause" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Pause</button>
      <button v-if="state === 'paused'" @click="resume" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Resume</button>
      <button v-if="state !== 'stopped'" @click="stop" class="bbg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Stop</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Stopwatch',
  data() {
    return {
      timeElapsed: 0,
      intervalId: null,
      state: 'stopped',
    };
  },
  methods: {
    start() {
      this.state = 'running';
      this.intervalId = setInterval(() => {
        this.timeElapsed++;
      }, 1000);
    },
    pause() {
      this.state = 'paused';
      clearInterval(this.intervalId);
    },
    resume() {
      this.state = 'running';
      this.intervalId = setInterval(() => {
        this.timeElapsed++;
      }, 1000);
    },
    stop() {
      this.state = 'stopped';
      clearInterval(this.intervalId);
      this.timeElapsed = 0;
    },
    formatTime(time) {
      const minutes = String(Math.floor(time / 60)).padStart(2, '0');
      const seconds = String(time % 60).padStart(2, '0');
      return `${minutes}:${seconds}`;
    },
  },
};
</script>


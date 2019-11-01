<template>
  <div id="app" class="app">
    <form class="form" @submit.prevent="addTask" :class="{hide:play}">
      <button type="button" class="button--second button button-clear" @click="clear">Clear all</button>
      <button type="button" class="button--prime button button--roll" @click="start">
        Lets
        roll
      </button>
      <tasks-list v-on:list-change="onListChange" :list="tasksList" />
      <transition name="slide-fade">
        <span class="error task-list__error" v-show="errorNumber">Please, add at least two tasks.</span>
      </transition>
      <input
        class="input-task input"
        placeholder="Input task"
        :class="{'input--error': errorLength}"
        type="text"
        v-model="mainTask"
      />
      <transition name="slide-fade">
        <span
          class="input-task__error error"
          v-show="errorLength"
        >Please, enter at least one character.</span>
      </transition>
      <button type="submit" class="button--second button--add button">Add task</button>
    </form>
    <transition name="rotate-fade">
      <span v-show="play" class="button gears" @click="play=!play">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="cog"
          class="svg-inline--fa fa-cog fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
          />
        </svg>
      </span>
    </transition>

    <main class="board" @click="roll" :class="{rolling : rolling}">
      <span class="board-task" :class="{'op-0': !play}">{{ rolledTask }}</span>
      <div v-for="(n,index) in backgroundArray" class="background" :style="n" :key="index"></div>
    </main>
  </div>
</template>

<script>
import TasksList from "./components/TasksList";

export default {
  name: "App",
  data() {
    return {
      mainTask: "",
      tasksList: [],
      rolledTask: "Click to roll",
      errorLength: false,
      errorNumber: false,
      play: false,
      rolling: false,
      backgroundArray: [
        {
          backgroundImage:
            "linear-gradient(to right top, rgb(151, 0, 0), rgb(114, 155, 0))",
          opacity: 1
        },
        {
          backgroundImage:
            "linear-gradient(to right top, rgb(151, 0, 0), rgb(114, 155, 0))",
          opacity: 1
        }
      ]
    };
  },
  methods: {
    onListChange(list) {
      this.rolledTask = "Click to roll";
      this.tasksList = list;
      if (this.errorNumber == true && this.tasksList.length > 1) {
        this.errorNumber = false;
      }
    },
    // Clear all tasks
    clear() {
      this.tasksList = [];
    },
    //Function adding new task to task list
    addTask() {
      let str = this.mainTask;
      // Remove spaces and make forst character big
      str = str.trim();
      if (str.length > 0) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
        // Push task to task list
        this.tasksList.push({ cont: str });
        // Clear input
        this.mainTask = "";
        this.errorLength = false;
      } else {
        this.errorLength = true;
      }
    },
    start() {
      if (this.tasksList.length > 1) {
        this.errorNumber = false;
        this.play = true;
      } else {
        this.errorNumber = true;
      }
    },
    roll() {
      if (this.rolling != true) {
        let tasksListLength = this.tasksList.length,
          x = Math.floor(Math.random() * tasksListLength),
          h1 = Math.floor(Math.random() * 360),
          h2 = Math.floor(Math.random() * 360);
        this.rolling = true;
        this.backgroundArray[0].backgroundImage = `linear-gradient(to top right, hsl(
          ${h1}
          , 95%, 15%), hsl(
          ${h2}
          , 95%, 80%))`;
        this.backgroundArray[0].opacity = 1;
        this.backgroundArray[1].opacity = 0;

        setTimeout(() => (this.rolledTask = this.tasksList[x].cont), 500);
        setTimeout(() => {
          this.backgroundArray.reverse();

          this.rolling = false;
        }, 1000);
      }
    }
  },

  components: {
    TasksList
  }
};
</script>
<style>
@import "../src/assets/css/style.css";
</style>

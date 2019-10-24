<template>
  <ul class="task-list">
    <task
      v-for="(task,index) in tasksList"
      :active="active"
      :task="task.cont"
      :index="index"
      v-on:delete-task="onDeleteTask"
      v-on:change-task="onChange"
      v-on:change-active="changeActive"
      :key="index"
    />
  </ul>
</template>
<script>
import TasksListElement from "../components/TasksListElement";

export default {
  props: ["list"],
  name: "TasksList",
  data() {
    return {
      tasksList: this.list,
      active: null
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
    },

    onDeleteTask(a) {
      this.tasksList.splice(a, 1);
    },
    onChange(task, index) {
      let str = task.trim();
      if (str.length > 0) {
        this.tasksList[index].cont = task;
      }
    }
  },
  watch: {
    tasksList: {
      deep: true,
      handler() {
        this.$emit("list-change", this.tasksList);
      }
    },
    list: function(oldVal,newVal){
      this.tasksList = this.list
    }
  },
  components: {
    task: TasksListElement
  }
};
</script>
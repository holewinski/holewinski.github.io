<template>
  <ul class="task-list">
    <task
      v-for="({cont},index) in tasksList"
      :active="active"
      :task="cont"
      :index="index"
      v-on:delete-task="onDeleteTask"
      v-on:change-task="onChange"
      v-on:change-active="changeActive"
      :key="cont+'-'+index"
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
      tasksList:[],
      active: null
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
    },

    onDeleteTask(a) {
      this.tasksList.splice(a, 1);
      console.log(a)
    },
    onChange(task, index) {
      let str = task.trim();
      if (str.length > 0) {
        this.tasksList[index].cont = task;
      }
    }
  },
  created() {
    this.tasksList = this.list
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
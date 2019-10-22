<template>
  <ul class="task-list">
    <task
      v-for="(task,index) in TasksList"
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
    props:['list'],
  name: "TasksList",
  data() {
    return {
      TasksList: this.list,
      active: null,

    };
  },
  methods:{
      changeActive(index) {
      this.active = index;
    },
    
    onDeleteTask(a) {
      this.TasksList.splice(a, 1);
    },
    onChange(task, index) {
      let str = task.trim();
      if (str.length > 0) {
        this.TasksList[index].cont = task;
      }
    },
  },
  watch: {
    TasksList: {
      deep: true,
      handler() {
        this.$emit('list-change',this.TasksList)
        if (this.TasksList.length > 1 && this.errorNumber == true) {
          this.errorNumber = false;
        }
      }
    }
  },
  components: {
    task: TasksListElement
  }
};
</script>
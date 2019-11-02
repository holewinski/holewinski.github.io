<template>
  <transition-group tag="ul" name="slide-left" class="task-list">
    <task
      v-for="({cont,id},index) in tasksList"
      :active="active"
      :task="cont"
      :index="index"
      v-on:delete-task="onDeleteTask"
      v-on:change-task="onChange"
      v-on:change-active="changeActive"
      :key="`#${id}-${cont}`"
    />
  </transition-group>
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
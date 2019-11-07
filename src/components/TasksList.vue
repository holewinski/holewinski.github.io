<template>
  <transition-group tag="ul" name="slide-left" class="task-list">
    <task
      v-for="({cont,id},index) in reverseList"
      :active="active"
      :task="{cont,id}"
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
  computed:{
    reverseList(){
      return this.tasksList.slice().reverse();
    }
  },  
  methods: {
    changeActive(id) {
      this.active = id;
    },

    onDeleteTask(a) {
      let index = this.tasksList.length -1 - a;
      this.tasksList.splice(index, 1);
      console.log(a)
    },
    onChange(task, id) {
      let str = task.trim();
      if (str.length > 0) {
        this.tasksList[id].cont = task;
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
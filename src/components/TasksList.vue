<template>
  <transition-group name="slide-scale" tag="ul" class="task-list" mode="out-in">
    <task
      v-for="{ cont, id } in reverseList"
      :active="active"
      :task="cont"
      :id="id"
      @delete-task="onDeleteTask"
      @change-task="onChange"
      @change-active="changeActive"
      :key="`#${id}-${cont}`"
      appear
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
      tasksList: [],
      active: null,
    };
  },
  computed: {
    reverseList() {
      return this.tasksList.slice().reverse();
    },
    index(id) {
      return this.tasksList.findIndex((item) => item.id == id);
    },
  },
  methods: {
    changeActive(id) {
      this.active = id;
    },

    onDeleteTask(id) {
      const index = this.tasksList.findIndex((item) => item.id == id);
      this.tasksList.splice(index, 1);
    },
    onChange(task, id) {
      const str = task.trim();
      if (str.length > 0) {
        const index = this.tasksList.findIndex((item) => item.id == id);
        this.tasksList[index].cont = task;
      }
    },
  },
  created() {
    this.tasksList = this.list;
  },
  watch: {
    tasksList: {
      deep: true,
      handler() {
        this.$emit("list-change", this.tasksList);
      },
    },
    list: function() {
      this.tasksList = this.list;
    },
  },
  components: {
    task: TasksListElement,
  },
};
</script>

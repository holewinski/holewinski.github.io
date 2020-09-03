<template>
  <li @click="$emit('change-active', id)" class="task" :class="{ edit: edit }">
    <input
      type="text"
      :readonly="!edit"
      class="task__text input"
      :class="{ readonly: !edit, 'input--error': error }"
      v-model="propTask"
      :size="taskLength"
      :maxlength="maxLength"
      v-on:keyup="typingTimer"
      v-on:keydown="clearTimeout"
    />
    <button
      type="button"
      class="button button--basic button--square"
      @click="$emit('delete-task', id)"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="trash-alt"
        class="svg-inline--fa fa-trash-alt fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
        />
      </svg>
    </button>
  </li>
</template>
<script>
export default {
  name: "TasksListElement",
  props: ["task", "id", "active"],
  data() {
    return {
      readonly: true,
      propTask: this.task,
      error: false,
      timer: null,
      interval: 1000,
      maxLength: 115,
    };
  },
  computed: {
    edit() {
      return this.active == this.id ? true : false;
    },
    taskLength() {
      return this.propTask.length;
    },
  },
  methods: {
    typingTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.changeEmmit, this.interval);
    },
    clearTimeout() {
      clearTimeout(this.timer);
    },
    changeEmmit() {
      if (this.taskLength > 0) {
        this.error = false;
        this.$emit("change-task", this.propTask, this.id);
      } else {
        this.error = true;
      }
    },
  },
};
</script>

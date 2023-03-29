<template>
  <TableTodo :tableData="data" :columns="columns" />

  <RouterView />
</template>

<script>
import TableTodo from './components/TableTodo.vue';

export default {
  data() {
    return {
      data: [
        {
          date: '2023/20/03',
          title: 'Ver curso Angular 🅰️',
          completed: false,
        },
        {
          date: '2023/20/02',
          title: 'Vers curso Vue 3 💚📗',
          completed: false,
        },
      ],
      // Cada columna posee su propio svg
      columns: [
        {
          prop: 'date',
          label: 'Date',
          svg: 'calendar',
        },
        {
          prop: 'title',
          label: 'Title',
          svg: 'abc',
        },
        {
          prop: 'completed',
          label: 'Completed',
          svg: 'hourglass-high'
        },
      ],
    };
  },
  components: {
    TableTodo,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

label {
  display: block;
  margin-bottom: 0.5em;
}
</style>

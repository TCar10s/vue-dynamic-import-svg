<template>
  <section class="table">
    <h1>Task table ⭐</h1>
    <el-table :data="tableData">
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        :prop="column.prop"
        :label="column.label"
      >
        <template #header>
          <SvgIcon :name="column.svg" />
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
import SvgIcon from './SvgIcon.vue';

export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Array,
      default: [],
    },
    columns: {
      type: Array,
      default: [],
    },
  },
  components: {
    SvgIcon,
  },
};
</script>
<style scoped>
.table {
  max-width: 700px;
  margin: 0 auto;
}
</style>

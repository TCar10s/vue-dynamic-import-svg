<template>
  <div></div>
</template>
<script>
import { ElMessageBox } from "element-plus";

export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    confirmButtonText: {
      type: String,
      default: "OK",
    },
    cancelButtonText: {
      type: String,
      default: "Cancel",
    },
    callback: {
      type: Function,
      default: () => {},
    },
    showConfirm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    open() {
      ElMessageBox.confirm(this.description, this.title, {
        confirmButtonText: this.confirmButtonText,
        cancelButtonText: this.cancelButtonText,
        type: this.type,
      }).then(() => {
        this.callback();
      });
    },
  },
  watch: {
    showConfirm: function (val) {
      console.log("show: " + val);
      this.open();
    },
  },
};
</script>
<style lang="css">
</style>
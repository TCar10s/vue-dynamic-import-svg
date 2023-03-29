<template lang="">
  <img v-if="picture" :src="picture" alt="picture" />
</template>

<script>
export default {
  data() {
    return {
      picture: '',
    };
  },
  mounted() {
    const user = JSON.parse(sessionStorage.getItem('session'));
    this.picture = user.image;
  },
};
</script>

<style lang=""></style>

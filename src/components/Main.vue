<template lang="pug">
.root
  menu-component
  router-view(v-if="isMenuPage")

</template>

<script>
import MenuComponent from '@/components/Menu/Menu.vue';

export default {
  name: "Main", 
  components: {
    MenuComponent
  },
  computed: {
    isMenuPage() {
      console.log(window.location.pathname);
      return window.location.pathname !== '/';
    }
  }

}
</script>

<style scoped>

</style>

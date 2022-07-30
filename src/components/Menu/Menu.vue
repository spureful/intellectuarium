<template lang="pug">
.menu
  ul.menu-list
    menu-item(
      v-for="item in menuItems"
      :key="item.id"
      v-bind="item"
      class="menu__item"
    )   

</template>


<script>
import MenuItem from '@/components/Menu/MenuItem.vue';
export default {
  name: "MenuComponent", 
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItems: [
        {
          id: 'Home',
          path: '/',
          content: 'В меню'
        },
        {
          id: 'Digits',
          path: '/numbers',
          content: 'Состав чисел'
        },
        {
          id: 'Memory',
          path: '/memory-cards',
          content: 'Карточки'
        },
      ],
    }
  },

}
</script>

<style>
.menu-list {
    list-style: none;
    display: flex;
    justify-content: center;
  }
</style>
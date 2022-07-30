<template lang="pug">
.menu-card(
    :class="{disabled: isMenuItemdisabled}"
    @click.prevent="openMenu"
    ) {{ content }}

</template>

<script>
export default {
    name: "MenuItem",
    props: {
        id: String,
        path: String,
        content: String,
    },
    computed: {
        isMenuItemdisabled() {
            return window.location.pathname === this.path;
        }
    },
    methods: {
        openMenu() {
            this.$router.push(this.path);
            location.reload();
        }
    }
}
</script>

<style scoped> 
    .menu-card {
        padding: 15px;
        border-radius: 15px;
        font-size: 18px;
        color: rgb(77, 73, 73);
        background-color: blanchedalmond;
        margin-right: 15px;
        cursor: pointer;
        transition: all .8s;
    }

    .menu-card:hover {
        transform: scale(0.8);
    }

    .menu-card.disabled {
        pointer-events: none;
        opacity: 0.8;
    }
</style>



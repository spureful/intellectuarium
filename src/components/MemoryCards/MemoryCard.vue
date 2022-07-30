<template lang="pug">
.card(
    @click="onClickCard"
    :class="{disable: isCardCatched}"
  )
    .card__front(:class="{flipped: isCardFront}")
    img.card__back(
      :src="src"
      :class="{flipped: !isCardFront}"
    )

</template>

<script>

export default {
name: "MemoryCard",
props: {
  id: String,
  src: String,
  isCardFront: Boolean,
  isCardCatched: {
    type: Boolean,
    default() {
      return false;
    }
  }

},
  methods: {
    onClickCard() {
      this.$emit('click-card', this.id);
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
  .card {
    width: 350px;
    height: 350px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    text-align: center;
    transform-style: preserve-3d;
    transform-origin: center center;
    transition: transform 1s;
  }

  .card.disable {
    pointer-events: none;
    border: 8px solid green;
  }


  .card__front,
  .card__back {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 1s;
    background-size: 100% 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__front {
    background: linear-gradient(55deg, #889ad4 2%, #b18abf 15%, #bf8ab6 40%, #34425f 60%);
  }

  .card__back {
    object-fit: contain;

  }

   .card__front.flipped, .card__back.flipped {
     transform:  rotateY(180deg) perspective(1000px);
  }

  @media screen and (max-width: 800px) {
  .card {
    width: 20%;
    height: 150px;
  }
}

</style>

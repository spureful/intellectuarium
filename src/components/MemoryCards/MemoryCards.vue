<template lang="pug">
.cards
  .cards__block
    memory-card(
      v-for="card in randomCards"
      :key="card.id"
      :id="card.id"
      :src="card.src"
      :is-card-front="card.isCardFront"
      :is-card-catched="card.isCardCatched"
      class="card"
      @click-card="onClickCard"
      )
  button.cards__button-else(
    @click="setCards"
  ) TRY AGAIN
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import MemoryCard from '@/components/MemoryCards/MemoryCard';

const ariel = require('@/assets/cards/ariel.jpg');
const aurora = require('@/assets/cards/aurora.png');
const elsa = require('@/assets/cards/elsa.png');
const ladyBag = require('@/assets/cards/lady-bag.png');
const sofia = require('@/assets/cards/sofia.jpg');
const supergirl = require('@/assets/cards/supergirl.png');

const clickMP3 = require('@/assets/sounds/click.mp3');
const sucsessMP3 = require('@/assets/sounds/sucsess.mp3');
const failMP3 = require('@/assets/sounds/fail.mp3');

const princessImages = [ariel, aurora, elsa, ladyBag, sofia, supergirl];


export default {
name: "MemoryCards",
  components: { MemoryCard },
  created() {
   this.setCards();
  },
  data() {
  const cards = princessImages.map(i => ({
    label: uuidv4(),
    src: i,
    isCardFront: false
  }));
    return {
      inOperation: false,
      randomCards: [],
      counter: 0,
      firstCard: null,
      cards
    };
  },
  methods: {
    onClickCard(id) {
      const clickSound = new Audio(clickMP3);
      const sucsessSound = new Audio(sucsessMP3);
      const failSound = new Audio(failMP3);
      if (this.inOperation) {
        return;
      }
      this.inOperation = true;
      clickSound.play();
      const clickedCard = this.randomCards.find(x => x.id === id);
      clickedCard.isCardFront = true;

      if (this.counter % 2 === 0 ) {
        this.firstCard = clickedCard;
        this._makeIterationEndChanges();
        return;
      }

      if (this.firstCard.label === clickedCard.label) {
        this.firstCard.isCardCatched = true;
        clickedCard.isCardCatched = true;
        this._makeIterationEndChanges();
        sucsessSound.play();
        return;
      }

      const defer = new Promise(resolve => {
        setTimeout(() => {
          this.firstCard.isCardFront = false;
          clickedCard.isCardFront = false;
          this.firstCard = null;
          failSound.play();
          resolve();
        }, 1300)
      });

      defer.then(() => {
        this._makeIterationEndChanges();
      })
    },
    setCards() {
      this.randomCards = this._makeRandomCards();
      this.firstCard = null;
    },
    _makeRandomCards() {
      const randomArr = [...this.cards, ...this.cards].map(x => ({
        id: uuidv4(),
        ...x
      }));
      return this._shuffleCards(randomArr);
    },
    _shuffleCards(arr) {
      let j, temp;
      for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        console.log('j', j);
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    },
    _makeIterationEndChanges() {
      this.counter++;
      this.inOperation = false;
    }
  }
}

</script>

<style scoped>
  .cards__block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  .card {
    margin-right: 20px;
    margin-bottom: 20px;
  }
  
  .cards__button-else {
    font-size: 18px;
    padding: 15px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: #889ad4;
    color: #fff;
    -webkit-transition: .7s;
    -moz-transition: .7s;
    -ms-transition: .7s;
    -o-transition: .7s;
    transition: .7s;
  }
  .cards__button-else:hover {
    background-color: #34425f;
    cursor: pointer;
  }
</style>

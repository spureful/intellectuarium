<template lang="pug">
  .cards
    .cards__block
      memory-card(
        v-for="card in randomCards"
        :key="card.id"
        :card-resolver="cardResolver"
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
// const whiteCatImg = require('@/assets/cards/white-cat.png');
// const blackCatImg = require('@/assets/cards/black-cat.png');
// const cobraImg = require('@/assets/cards/cobra.png');
// const dogImg = require('@/assets/cards/dog.png');
// const elephantImg = require('@/assets/cards/elephant.png');
const ariel = require('@/assets/cards/ariel.jpg');
const aurora = require('@/assets/cards/aurora.png');
const elsa = require('@/assets/cards/elsa.png');
const ladyBag = require('@/assets/cards/lady-bag.png');
const sofia = require('@/assets/cards/sofia.jpg');
const supergirl = require('@/assets/cards/supergirl.png');


export default {
name: "MemoryCards",
  components: { MemoryCard },
  created() {
   this.setCards();
  },
  data() {
    return {
      inOperation: false,
      randomCards: [],
      cards: [
        // {
        //   label: 'white-cat',
        //   src: whiteCatImg,
        //   isCardFront: false
        // },
        // {
        //   label: 'black-cat',
        //   src: blackCatImg,
        //   isCardFront: false
        // },
        // {
        //   label: 'cobra',
        //   src: cobraImg,
        //   isCardFront: false
        // },
        // {
        //   label: 'dog',
        //   src: dogImg,
        //   isCardFront: false
        // },
        // {
        //   label: 'elephant',
        //   src: elephantImg,
        //   isCardFront: false
        // },
        {
          label: 'ariel',
          src: ariel,
          isCardFront: false
        },
        {
          label: 'aurora',
          src: aurora,
          isCardFront: false
        },
        {
          label: 'elsa',
          src: elsa,
          isCardFront: false
        },
        {
          label: 'ladyBag',
          src: ladyBag,
          isCardFront: false
        },
        {
          label: 'sofia',
          src: sofia,
          isCardFront: false
        },
        {
          label: 'supergirl',
          src: supergirl,
          isCardFront: false
        },

      ],
      cardResolver: false,
      selectedCards: [],
      counter: 0,
      firstCard: null
    };
  },
  methods: {
    onClickCard(id) {
      if (this.inOperation) {
        return;
      }
      this.inOperation = true;
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
        return;
      }

      const defer = new Promise(resolve => {
        setTimeout(() => {
          this.firstCard.isCardFront = false;
          clickedCard.isCardFront = false;
          this.firstCard = null;
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

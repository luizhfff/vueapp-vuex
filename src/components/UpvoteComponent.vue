<script setup>
import { useStore } from 'vuex';
import PlusImg from '../assets/plus.svg';
import ArrowUpSvg from './ArrowUpSvg.vue';

const store = useStore();
</script>

<template>
  <h1>Upvote</h1>
  <div class="instructions">Click on the plus icon to add an element and click on the element to change its state</div>
  <div class="upvoteContainer">
    <div class="upvotes" @click="store.dispatch('upvoteToggleSelection')">
      <div class="items" v-for="numOfVotes in store.getters.getNumOfVotes" :key="numOfVotes">
        <div v-if="store.getters.getUpvoteSelectedState" id="arrowUpSelected">
          <ArrowUpSvg fillColour="#253CF2" />
        </div>
        <div v-else id="arrowUpUnselected">
          <ArrowUpSvg />
        </div>
      </div>
    </div>
    <div class="addUpvote"><img :src="PlusImg" @click="store.dispatch('addVote')" /></div>
  </div>
  <div class="numberOfVotes">Number of votes: {{ store.getters.getNumOfVotes }}</div>
</template>

<style>
.instructions {
  color: black;
  margin: 20px;
  font-size: large;
}

.upvoteContainer {
  display: inline-flex;
  align-items: center;
}

.addUpvote {
  margin: 20px;
  width: 50px;
  border-radius: 15px;
  border-color: #f4f6f8;
  border-style: solid;
  border-width: 3px;
  background-color: #f4f6f8;
}

.addUpvote img {
  width: 35px;
  padding: 5px;
}

.upvotes {
  border-radius: 15px;
  border-color: #f4f6f8;
  border-style: solid;
  border-width: 3px;
  display: inline-flex;
  flex-wrap: wrap;
  min-height: 80px;
  min-width: 600px;
  max-width: 600px;
}

#arrowUpUnselected svg {
  width: 50px;
  height: 50px;
  background-color: #f4f6f8;
  margin: 10px;
  border-radius: 10px;
}

#arrowUpSelected svg {
  width: 50px;
  height: 50px;
  background-color: #e5e8fd;
  margin: 10px;
  border-radius: 10px;
}

.numberOfVotes {
  font-weight: bold;
  margin: 50px;
}
</style>

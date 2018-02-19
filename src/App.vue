<template>
  <div id="app">
    <Header/>
    <SearchBar v-on:change="handleSearch" />
    <SearchResults 
      :listOfEmoji="listOfEmoji"
     />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'app',
  data() {
    return {
      listOfEmoji: [
        {
          title: 'smiley',
          symbol: '😀',
          description: 'smiley face'
        },
        {
          title: 'cheeky',
          symbol: '😛',
          description: 'Tongue Face'
        },
      ]
    }
  },
  components: {
    Header,
    SearchBar,
    SearchResults,
  },
  methods: {
    handleSearch(value) {
      console.log(value);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  position: relative;
  width: 100%;
}
</style>

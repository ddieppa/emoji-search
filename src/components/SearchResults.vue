<template>
    <div id="search-results">
        <ResultRow 
            v-for="emoji in listOfEmoji" 
            :key="emoji.symbol"
            :title="emoji.title"
            :symbol="emoji.symbol"
            :keywords="emoji.keywords"
        /> 
    </div>
</template>

<script>
import ResultRow from './ResultRow.vue'

export default {
    name: 'SearchResults',
    props: ['listOfEmoji'],
    components: {
        ResultRow,
    }
}
</script>

<style>


</style>
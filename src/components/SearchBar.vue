<template>
    <div id="search-bar">
        <input 
            ref="input"
            v-bind:value="searchInput" 
            @input="handleInput($event.target.value)"
            type="text" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: ['searchInput'],
    methods: {
        handleInput(value) {
            this.$refs.input.value = value;
            this.$emit('change', value);
        }
    }
}
</script>

<style>

#search-bar {
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 10px;
}

#search-bar input {
    padding: 10px 8px;
    border-radius: 4px;
    border: 1px solid #d5d5d5;
    display: block;
    box-sizing: border-box;
    width: 100%;
}

</style>
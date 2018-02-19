<template>
    <div id="search-bar">
        <input type="text" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
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
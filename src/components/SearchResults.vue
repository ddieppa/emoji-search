<template>
    <div id="search-results">
        <div class="result-item">
            <img 
                src="../assets/0023.png"
                alt="Icon"
            />
            <span class="title">Icon name</span>
        </div>
        <div class="result-item">
            <img 
                src="../assets/0023.png"
                alt="Icon"
            />
            <span class="title">Icon name 2</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchResults',
}
</script>

<style>

#search-results div.result-item {
    position: relative;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
    cursor: pointer;
    height: 32px;
}

#search-results div.result-item:hover {
    background-color: #eee;
}

div.result-item img {
    width: 32px;
    height: 32px;
    position: relative;
    padding: 0 10px;
}

div.result-item span.title {
    position: relative;
    font-weight: bold;
    top: -8px;
}

</style>
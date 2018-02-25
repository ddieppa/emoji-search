<template>
    <div class="result-item">
        <img 
            :src="src"
            :alt="title"
        />
        <span class="title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: '../assets/0023.png'
        }
    },
    created() {
        const codePointHex = this.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        this.src = src
    },
    name: 'ResultRow',
    props: ['title', 'symbol', 'keywords'],
}
</script>

<style scoped>

div.result-item {
    position: relative;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
    cursor: pointer;
    height: 32px;
}

div.result-item:hover {
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
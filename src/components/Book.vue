<script>
    export default {
        props: {
            id: Number,
            imagePath: String,
            author: String, // Propriedade para o autor
            title: String,  // Propriedade para o título
            text: String,   // Propriedade para o texto
            link: String    // Propriedade para o link (href)
        },
        computed: {
            getID() {
                return `menu-${Math.random().toString(36).substring(7)}`;
            }
        },
    };
</script>

<template>
    <div class="card m-2">
        <div class="card-img">
            <img :src=imagePath alt="">
        </div>
        <div class="card-title">{{ title }}</div>
        <div class="card-subtitle">{{ author }}</div>
        <div class="card-footer">
            <a href="#" class="icons fa-regular fa-heart"></a>
            <a href="#" class="icons fa-regular fa-user"></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('../assets/scss/card-book.scss');
</style>
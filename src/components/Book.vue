<script>
    export default {
        props: {
            id: Number,
            imagePath: String,
            author: String, // Propriedade para o autor
            title: String,  // Propriedade para o título
            text: String,   // Propriedade para o texto
            goal: Number,
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
    <div class="card mx-3 my-5">
        <div v-if="goal == 1" class="ribbon orange"><i class="fa-solid fa-dollar-sign fa-lg"></i></div> <!-- venda -->
        <div v-else-if="goal == 2" class="ribbon blue"><i class="fa-solid fa-arrow-right-arrow-left fa-lg"></i></div> <!-- troca -->
        <div v-else-if="goal == 3" class="ribbon purple"><i class="fa-regular fa-clock fa-lg"></i></div> <!-- empréstimo -->
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
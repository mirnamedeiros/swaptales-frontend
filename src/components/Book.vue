<script>
    export default {
        props: {
            id: Number,
            imagePath: String,
            author: String, // Propriedade para o autor
            title: String,  // Propriedade para o título
            text: String,   // Propriedade para o texto
            type: String,
            link: String,   // Propriedade para o link (href)
            idUser: Number, 
        },
        computed: {
            getID() {
                return `menu-${Math.random().toString(36).substring(7)}`;
            }
        },
        methods: {
            redirectBookDetail(){
                this.$router.push('/book-detail/' + this.id);
            }
        }
    };
</script>

<template>
    <div class="card mx-3 my-5" @click="redirectBookDetail">
        <div v-if="type == 'FOR_SALE'" class="ribbon orange"><i class="fa-solid fa-dollar-sign fa-lg"></i></div> <!-- venda -->
        <div v-else-if="type == 'FOR_TRADE'" class="ribbon blue"><i class="fa-solid fa-arrow-right-arrow-left fa-lg"></i></div> <!-- troca -->
        <div v-else-if="type == 'FOR_LOAN'" class="ribbon purple"><i class="fa-regular fa-clock fa-lg"></i></div> <!-- empréstimo -->
        <div class="card-img">
            <img :src=imagePath alt="">
        </div>
        <div class="card-title">{{ title }}</div>
        <div class="card-subtitle">{{ author }}</div>
        <div class="card-footer">
            <a :href="'/add-review/' + id" class="icons fa-regular fa-heart"></a>
            <a :href="'/profile/' + idUser" class="icons fa-regular fa-user"></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('../assets/scss/card-book.scss');
</style>
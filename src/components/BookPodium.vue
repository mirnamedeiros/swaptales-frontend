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
        methods: {
            redirectBookDetail(){
                this.$router.push(this.link);
            }
        }
    };
</script>

<template>
    <div class="card mx-3 my-5" @click="redirectBookDetail">
        <div class="ribbon purple"><span>{{ id + 1 }}</span></div>
        <div class="card-img">
            <img :src=imagePath alt="">
        </div>
        <div class="card-title">{{ title }}</div>
        <div class="card-subtitle">{{ author }}</div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('../assets/scss/card-book.scss');

    .ribbon {
        color: #fff;
        
        span {
            font-size: 1.5em;
            padding-top: 20%;
        }
    }

</style>
<script>
    export default {
        props: {
            id: Number,
            imagePath1: String,
            imagePath2: String,
            user1Name: String,
            user1Image: String,
            user2Name: String,
            user2Image: String,
            exchangeDate: String,
        },
    };
</script>

<template>
    <div class="book-exchange-card">
        <div class="exchange-date">Data: {{ exchangeDate }}</div>
        <div class="swap-info">
            <div class="user-info">
                <img :src="user1Image" alt="User 1 Image" class="user-image" />
                <span>{{ user1Name }}</span>
            </div>
            <img :src="imagePath1" alt="Book 1 Image" class="book-image" />
            <div class="exchange-icon">
                <i class="fas fa-exchange-alt"></i>
            </div>
            <img :src="imagePath2" alt="Book 2 Image" class="book-image" />
            <div class="user-info">
                <img :src="user2Image" alt="User 2 Image" class="user-image" />
                <span>{{ user2Name }}</span>
            </div>
        </div>
    </div>
    <!-- TODO purple slide card on hover with the complete swap info -->
  </template>
  

<style lang="scss" scoped>
    @import url('../assets/scss/card-swap.scss');
</style>
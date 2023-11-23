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
        exchangeDate: Array,
        titleBook1: String,
        authorBook1: String,
        titleBook2: String,
        authorBook2: String
    },
};
</script>

<template>
    <div class="card">
        <div class="slide slide1">
            <div class="content">
                <div class="book-exchange-card">
                <div class="exchange-date">Data: {{ (exchangeDate) ? exchangeDate[2] + "/" + exchangeDate[1] + "/" + exchangeDate[0] : "-" }}</div>
                <div class="separate"></div>
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
            </div>
        </div>
        <div class="slide slide2">
            <div class="content">
                <h5>{{ titleBook1 }}</h5>
                <span>{{ authorBook1 }}</span>
                <div class="separate" style="background-color: #1c2135;"></div>
                <h5>{{ titleBook2 }}</h5>
                <span>{{ authorBook2 }}</span>
            </div>
        </div>
    </div>
</template>
  

<style lang="scss" scoped>
@import url('../assets/scss/card-swap.scss');
</style>
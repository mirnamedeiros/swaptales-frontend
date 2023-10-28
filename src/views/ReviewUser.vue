<script>
    import NavBar from '../components/Navbar.vue'
    import ReviewUser from '../components/ReviewUser.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'Swaps',
        components: {
            NavBar,
            ReviewUser, 
            Footer
        },

        data() {
            return;
        }
    }
</script>

<template>
    <main>
        <NavBar/>
        <div class="container my-5">
            <ReviewUser/>
        </div>
        <Footer/>
    </main>
</template>
<script>
import NavBar from '../components/Navbar.vue'
import BookSwap from '../components/BookSwap.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Viewbooks',
        components: {
            NavBar,
            BookSwap,
            Footer
        },
        head: {
        script: [
            { type: 'text/javascript', src: '../js/scripts.js', async: true, body: true}, // Insert in body
        ],
        },
        data() {
            return {
                swaps: [
                    {id:1,
                    imagePath1: "src/assets/images/a-feast-of-crows.jpg",
                    imagePath2: "src/assets/images/a-clash-of-kings.jpg",
                    user1Name: "Alex Morisson",
                    user1Image: "src/assets/images/profile-1.jpg",
                    user2Name: "Aemma Silva",
                    user2Image: "src/assets/images/profile-2.jpg",
                    exchangeDate: "13/03/2023",},
                    {id:2,
                    imagePath1: "src/assets/images/a-dance-with-dragons.jpg",
                    imagePath2: "src/assets/images/a-storm-swords.jpeg",
                    user1Name: "Alex Morisson",
                    user1Image: "src/assets/images/profile-1.jpg",
                    user2Name: "James Alecsander",
                    user2Image: "src/assets/images/profile-3.jpg",
                    exchangeDate: "13/03/2023",},
                ]
            }
        },
//
        beforeMount(){
            this.getbooks()
        },

        methods: {
            getbooks(){
                fetch('http://localhost:8080/swaptales/api/books', {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(data => {
                    this.books = data
                    console.log(data)
                })
            },
            deletebook(id){
                fetch(`http://localhost:8080/swaptales/api/books/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getbooks()
                })
            }
        },
    }

</script>

<template>
    <main>
        <NavBar/>
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <BookSwap v-for="swap in swaps"
            :key="swap.id"
            :imagePath1="swap.imagePath1"
            :imagePath2="swap.imagePath2"
            :user1Name="swap.user1Name"
            :user1Image="swap.user1Image"
            :user2Name="swap.user2Name"
            :user2Image="swap.user2Image"
            :exchange-date="swap.exchangeDate"/>
        </div>
        <Footer/>
    </main>
</template>



<script>
import NavBar from '../components/Navbar.vue'
import Book from '../components/Book.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Viewbooks',
        components: {
            NavBar,
            Book,
            Footer
        },
        head: {
        script: [
            { type: 'text/javascript', src: '../js/scripts.js', async: true, body: true}, // Insert in body
        ],
        },
        data() {
            return {
                books: [
                    {id:1,
                    imagePath:"src/assets/images/a-feast-of-crows.jpg",
                    author:"George R. R. Martin",
                    title:"A Feast for Crows",
                    text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                    goal:1,
                    link:"#"},
                    {id:2,
                    imagePath:"src/assets/images/a-clash-of-kings.jpg",
                    author:"George R. R. Martin",
                    title:"A Clash Of Kings",
                    text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                    goal:2,
                    link:"#"},
                    {id:3,
                    imagePath:"src/assets/images/a-dance-with-dragons.jpg",
                    author:"George R. R. Martin",
                    title:"A Dance With Dragons",
                    text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                    goal:3,
                    link:"#"},
                    {id:4,
                    imagePath:"src/assets/images/a-storm-swords.jpeg",
                    author:"George R. R. Martin",
                    title:"A Storm of Swords",
                    text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                    goal:2,
                    link:"#"}
                ]
            }
        },

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
        <div class="container d-flex flex-wrap justify-content-center">
            <Book v-for="book in books"
            :key="book.id"
            :imagePath="book.imagePath"
            :author="book.author"
            :title="book.title"
            :text="book.text"
            :goal="book.goal"
            :link="book.link"/>
        </div>
        <Footer/>
    </main>
</template>



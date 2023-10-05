<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Viewbooks',
        components: {
            NavBar,
            Footer
        },
        head: {
        script: [
            { type: 'text/javascript', src: '../js/scripts.js', async: true, body: true}, // Insert in body
        ],
        },
        data() {
            return {
                books: []
            }
        },

        beforeMount(){
            this.getbooks()
        },

        methods: {
            getbooks(){
                fetch('http://localhost:8080/books')
                .then(res => res.json())
                .then(data => {
                    this.books = data
                    console.log(data)
                })
            },
            deletebook(id){
                fetch(`http://localhost:8080/book/${id}`, {
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
        <!-- Table-->
        <div class="container my-5">
            <div class="row">
                <div class="col-md-12 d-flex flex-column">
                    <div class="options d-flex justify-content-end">
                        <button type="button" class="btn btn-primary col-1 align-self-end"><i class="fa-solid fa-magnifying-glass pr-2"></i></button>
                        <!-- <a href="/add" class="btn btn-primary col-2 align-self-end">Add book</a> -->
                    </div>
                    <div class="card-wrapper">
                        <div class="card" style="background-image: url('src/assets/images/a-feast-of-crows.jpg');">
                            <div class="card-head">
                            <svg viewBox="0 0 100 100">
                                <h2>A Feast for Crows</h2>
                            </svg>
                            </div>
                            <div class="card-body">
                            <div class="title">George R. R. Martin</div>
                            <div class="actions">
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa fa-exchange"></i></button>
                                <button><i class="fa-regular fa-user"></i></button>
                            </div>
                            </div>
                        </div>
                        <div class="card" style="background-image: url('src/assets/images/a-clash-of-kings.jpg');">
                            <div class="card-head">
                            <svg viewBox="0 0 100 100">
                                <h2>A Clash of Kings</h2>
                            </svg>
                            </div>
                            <div class="card-body">
                            <div class="title">George R. R. Martin</div>
                            <div class="actions">
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa fa-exchange"></i></button>
                                <button><i class="fa-regular fa-user"></i></button>
                            </div>
                            </div>
                        </div>
                        <div class="card" style="background-image: url('src/assets/images/a-dance-with-dragons.jpg');">
                            <div class="card-head">
                            <svg viewBox="0 0 100 100">
                                <h2>A Dance with Dragons</h2>
                            </svg>
                            </div>
                            <div class="card-body">
                            <div class="title">George R. R. Martin</div>
                            <div class="actions">
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa fa-exchange"></i></button>
                                <button><i class="fa-regular fa-user"></i></button>
                            </div>
                            </div>
                        </div>
                        <div class="card" style="background-image: url('src/assets/images/a-storm-swords.jpeg');">
                            <div class="card-head">
                            <svg viewBox="0 0 100 100">
                                <h2>A Storm of Swords</h2>
                            </svg>
                            </div>
                            <div class="card-body">
                            <div class="title">George R. R. Martin</div>
                            <div class="actions">
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa fa-exchange"></i></button>
                                <button><i class="fa-regular fa-user"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>

<style lang="scss" scoped>
    @import url('../assets/scss/card-book.scss');
</style>

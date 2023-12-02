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
                books: [],
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
        <NavBar />
    
  
    <div class="container position-relative">
          <a href="/add" class="position-absolute top-3 end-0 mt-1 mr-6 pb-5">
            <button type="button" class="btn btn-primary">
              <i class="fa-solid fa-plus pr-2"></i>
              <span class="p-2 text-decoration-none">ADICIONAR LIVRO</span>
            </button>
          </a>
          <div class="d-flex flex-wrap justify-content-center mt-2 pt-4">
            <Book
              v-for="book in books"
              :key="book.id"
              :id="book.id"
              :imagePath="book.urlImg"
              :author="book.author"
              :title="book.title"
              :text="book.text"
              :type="book.availabilityStatus"
              :link="book.link"
              :idUser="book.ownerUser.id"
            />
          </div>
        </div>
        <Footer />
      </main>
    </template>



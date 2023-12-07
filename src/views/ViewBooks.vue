<template>
    <main>
      <NavBar />
      <div class="container position-relative">
        <div class="input-group mt-3 mb-3">
          <input type="text" v-model="searchTerm" class="form-control" placeholder="Pesquisar por título ou autor" @input="handleSearch" />
        </div>
  
        <div class="d-flex flex-wrap justify-content-center mt-2 pt-4">
          <Book
            v-for="book in paginatedBooks"
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
  
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-4">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" aria-label="Previous" @click="prevPage">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
              <a class="page-link" href="#" @click="setPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </main>
  </template>
  
  <script>
  import NavBar from '../components/Navbar.vue';
  import Book from '../components/Book.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'Viewbooks',
    components: {
      NavBar,
      Book,
      Footer,
    },
    data() {
      return {
        books: [],
        currentPage: 1,
        itemsPerPage: 8, // número de itens por página
        searchTerm: '',
      };
    },
  
    beforeMount() {
      this.getbooks();
    },
  
    computed: {
      filteredBooks() {
        const term = this.searchTerm.toLowerCase();
        return this.books.filter(
          book =>
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term)
        );
      },
      totalPages() {
        return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
      },
      paginatedBooks() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredBooks.slice(startIndex, endIndex);
      },
      pages() {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
    },
  
    methods: {
      getbooks() {
        fetch('http://localhost:8080/swaptales/api/books', {
          method: 'GET',
        })
          .then(response => response.json())
          .then(data => {
            this.books = data;
          });
      },
  
      setPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
  
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
  
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
  
      handleSearch() {
        this.currentPage = 1;
      },
    },
  };
  </script>  
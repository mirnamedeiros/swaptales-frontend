<template>
    <main>
      <NavBar/>
      <div class="container my-5">
        <div>
          <div class="d-flex justify-content-between">
            <h2>Reviews</h2>
            <router-link to="/all-reviews" class="btn btn-primary">Ver Mais</router-link>
          </div>
          <div class="row row-cols-md-5">
            <div v-for="review in reviews.slice(0, 5)" :key="review.id" class="col-md-2 mb-4">
              <div class="card" style="width: 100%;">
                <img :src="review.book.urlImg" class="card-img-top" alt="capa" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">{{ review.authorReview.username }}</h5>
                  <p class="card-text">{{ review.text }}</p>
                  <div class="rating">
                    <span v-for="star in review.stars" :class="{ 'fa': true, 'fa-star': true, 'checked': star, 'yellow-star': true }"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex justify-content-between">
            <h2>Top Reviews</h2>
            <router-link to="/top-reviews" class="btn btn-primary">Ver Mais</router-link>
          </div>
          <div class="row row-cols-md-5">
            <div v-for="review in reviews.slice(0, 5)" :key="review.id" class="col-md-2 mb-4">
              <div class="card" style="width: 100%;">
                <img :src="review.book.urlImg" class="card-img-top" alt="capa" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">{{ review.authorReview.username }}</h5>
                  <p class="card-text">{{ review.text }}</p>
                  <div class="rating">
                    <span v-for="star in review.stars" :class="{ 'fa': true, 'fa-star': true, 'checked': star, 'yellow-star': true }"></span>
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
  
  <script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import 'font-awesome/css/font-awesome.css'
  
  export default {
    name: 'Review',
    components: {
      NavBar,
      Footer
    },
    data() {
      return {
        reviews: []
      }
    },
    mounted() {
      this.findReviews();
    },
    methods: {
      findReviews() {
        fetch('http://localhost:8080/swaptales/api/reviews', {
          method: 'GET'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro ao recuperar reviews: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          if (data) {
            this.reviews = data;
          } else {
            alert("Nao ha reviews");
          }
        })
        .catch(error => {
          console.error('Erro ao fazer a solicitação:', error);
        });
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .yellow-star {
    color: yellow;
  }
  
  .card-rev {
    width: 100px;
    height: 100px;
    background-color: #202020;
  }
  
  .row-cols-md-5 .col-md-2 {
    flex: 0 0 20%;
    max-width: 20%;
  }
  </style>
  
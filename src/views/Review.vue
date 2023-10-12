<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Review',
        components: {
            NavBar,
            Footer
        },

        beforeMount(){
            this.getListReviews();
         },

         data() {
            return {
                reviews: []
            }
        },

        methods: {
          getListReviews(){

              fetch('http://localhost:8080/swaptales/api/review/list', {
                method: 'GET'
              })
                .then(response => response.json())
                .then(data => {
                    this.reviews = data;
                    console.log(this.reviews);
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
                    <ul>
                        <li v-for="review in reviews" :key="review.id">
                        {{ review.stars }} - {{ review.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>

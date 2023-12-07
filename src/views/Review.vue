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

        mounted(){
            this.findReviews();
         },

        methods: {
          findReviews(){

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
					if(data){
						this.reviews = data
                            console.log(this.reviews);
					}else{
					alert("Nao ha reviews");
					}
				})
          }
      },
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
</style>


<template>
    <main>
        <NavBar/>
        <div class="container my-5">
            <div>
                <h2>Top reviews</h2>
            </div>
            <div class="row row align-items-center">
                <div class="col-md-4 " v-for="review in reviews" :key="review.id">
                <div class="card" style="width: 14rem;">
                    <img :src="review.book.urlImg" class="card-img-top" alt="capa">
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
        <Footer />
    </main>
</template>

<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'BookDetail',
        components: {
            NavBar,
            Footer
        },
		data() {
			return {
				book : {
					title: "",
				},
				id: null,
			}
    	},
		mounted(){
			this.id = this.$route.params.id;
			this.findBook(this.id);
		},
		methods: {
			findBook(id){
				fetch(`http://localhost:8080/swaptales/api/books/${id}`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'GET',
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(`Erro ao recuperar o usuario: ${response.statusText}`);
						}
						return response.text();
					})
					.then(data => {
						if(data){
							this.setBook(JSON.parse(data));
						}else{
							console.log("Usuario não encontrado");
						}
					})
					.catch(error => {
						console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
					});
        	},
			setBook(data){
				this.book.title = data.title;
				this.book.price = (data.price) ? data.price : 0;
				this.book.countReview = (data.reviews) ? data.reviews.length : 0;
				this.book.idioma = (data.idioma)? data.idioma : '-';
				this.book.author = data.author;
				this.book.description = (data.description) ? data.description : '-';
				this.book.urlImg = data.urlImg;
			}
		},
    }
</script>

<template>
    <NavBar/>
    <div class="container d-flex justify-content-center">
		<div class="card-profile p-5">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-5">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img :src="book.urlImg" /></div>
						</div>
						
					</div>
					<div class="details col-md-7">
						<h3 class="product-title">{{ book.title }}</h3>
						<div class="rating">
							<span class="review-no">{{ book.countReview }} reviews</span>
						</div>
						
						<h4 class="price"><span>R$ {{book.title}}</span></h4>
						<h5 class="titles">Linguagem:
							<span>{{ book.idioma }}</span>
						</h5>
						<h5 class="titles">Escritor(a):
							<span>{{ book.author }}</span>
						</h5>

                        <p class="product-description">{{ book.description }}</p>

						<div class="action">
							<button class="btn btn-primary col-1 align-self-center" type="button" style="margin-right: 20px;">Comprar</button>
							<button class="btn btn-primary col-1 align-self-center" type="button"><span class="fa fa-heart"></span></button>
						</div>
                        
					</div>
				</div>
			</div>
		</div>
	</div>
    <Footer/>
</template>

<style lang="scss" scoped>
    @import url('../assets/scss/book-detail.scss');
    @import url('../assets/scss/style.scss');
</style>
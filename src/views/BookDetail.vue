<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'BookDetail',
        components: {
            NavBar,
            Footer
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
						  <div class="tab-pane active" id="pic-1"><img src="src/assets/images/a-feast-of-crows.jpg" /></div>
						</div>
						
					</div>
					<div class="details col-md-7">
						<h3 class="product-title">A Feast For Crows</h3>
						<div class="rating">
							<span class="review-no">2 reviews</span>
						</div>
						
						<h4 class="price"><span>R$ 30,00</span></h4>
						<h5 class="titles">Linguagem:
							<span>inglês</span>
						</h5>
						<h5 class="titles">Editora:
							<span>bantam dell</span>
						</h5>

                        <p class="product-description">There are many variations of passages of 
                            Lorem Ipsum available, but the majority have suffered alteration in 
                            some form, by injected humour.</p>

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
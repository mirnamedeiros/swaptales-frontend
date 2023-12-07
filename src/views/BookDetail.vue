<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { format } from 'date-fns';

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
				idUserBook: null,
				idUserCurrent: null,
				today: new Date(),
				idBookLoan: null,
				booksUser: [],
			}
    	},
		mounted(){
			this.id = this.$route.params.id;
			this.idUserCurrent = localStorage.getItem('currentUser');
			this.findBook(this.id);
			this.findBooks(this.idUserCurrent);
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
							this.bookId = this.book.id; 
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
				this.book.availabilityStatus = data.availabilityStatus;
				this.book.countDaysLoan = data.countDaysLoan;
				this.idUserBook = data.ownerUser.id;
			},
			findBooks(id){
				fetch(`http://localhost:8080/swaptales/api/books/user/${id}`, {
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
							this.booksUser = JSON.parse(data);
						}else{
							console.log("Usuario não encontrado");
						}
					})
					.catch(error => {
						console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
					});
        	},
			buyBook(){
				console.log(format(this.today, 'MM-dd-yyyy'));
				let payload = {
					dateTransaction: format(this.today, 'MM-dd-yyyy'),
					status: "ACEITO",
					bookId: this.id,
					price: this.book.price,
					userId: this.idUserCurrent
				}

				fetch(`http://localhost:8080/swaptales/api/transactions/sale`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify(payload),
				})
					.then(response => {
                    if (response.status === 200) {
                      console.log('Livro comprado com sucesso');
                      this.$router.push('/books');
                    } else {
                      console.error('Erro ao comprar o livro:', response.statusText);
                    }
                  })
                  .catch(error => {
                    console.error('Erro ao fazer a solicitação:', error);
                  });
			},
			loanBook(){
				
				let payload = {
					dateLoan: format(this.today, 'MM-dd-yyyy'),
					status: "PENDENTE",
					bookId: this.id,
					userId: this.idUserCurrent
				}

				fetch(`http://localhost:8080/swaptales/api/transactions/loan`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify(payload),
				})
					.then(response => {
                    if (response.status === 200) {
                      console.log('Livro pego emprestado com sucesso');
                      this.$router.push('/books');
                    } else {
                      console.error('Erro ao pegar emprestado um livro:', response.statusText);
                    }
                  })
                  .catch(error => {
                    console.error('Erro ao fazer a solicitação:', error);
                  });
			},
			tradeBook(){
				let payload = {
					dateTransaction: format(this.today, 'MM-dd-yyyy'),
					status: "PENDENTE",
					bookId: this.id,
					userId: this.idUserCurrent,
					bookExchangeId: this.idBookLoan,
				}

				fetch(`http://localhost:8080/swaptales/api/transactions/exchange`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify(payload),
				})
					.then(response => {
                    if (response.status === 200) {
                      console.log('Pedido de troca realizado com sucesso');
                      this.$router.push('/books');
                    } else {
                      console.error('Erro ao solicitar troca de um livro:', response.statusText);
                    }
                  })
                  .catch(error => {
                    console.error('Erro ao fazer a solicitação:', error);
                  });
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
						  <div class="card-img active" id="pic-1"><img :src="book.urlImg" /></div>
						</div>
						
					</div>
					<div class="details col-md-7">
						<h3 class="product-title">{{ book.title }}</h3>
						<div class="rating">
							<span class="review-no">{{ book.countReview }} reviews</span>
						</div>
						
						<h4 class="price" v-if="book.availabilityStatus == 'FOR_SALE'"><span>R$ {{book.price}}</span></h4>
						<h4 class="price" v-if="book.availabilityStatus == 'FOR_LOAN'"><span>Dias de emprestimo: {{ book.countDaysLoan }} Dias</span></h4>
						
						<h5 class="titles">Linguagem:
							<span>{{ book.idioma }}</span>
						</h5>
						<h5 class="titles">Escritor(a):
							<span>{{ book.author }}</span>
						</h5>

                        <p class="product-description">{{ book.description }}</p>

						<div v-if="book.availabilityStatus == 'FOR_TRADE'">
							<h5 class="title">Selecione o livro para trocar</h5>
							<select class="form-select" aria-label=".form-select-lg example" v-model="idBookLoan">
								<option v-for="option in booksUser" :key="option.id" :value="option.id">
									{{ option.title }}
								</option>
							</select>
						</div>

						<div class="action">
							<div v-if="idUserCurrent != idUserBook">
								<button 
									v-if="book.availabilityStatus == 'FOR_SALE'"
									class="btn btn-primary col-1 align-self-center" 
									type="button" 
									style="margin-right: 20px;"
									@click="buyBook()">Comprar</button>
								<button 
									v-if="book.availabilityStatus == 'FOR_TRADE'"
									class="btn btn-primary col-1 align-self-center" 
									type="button" 
									style="margin-right: 20px;"
									@click="tradeBook()">Trocar</button>
								<button 
									v-if="book.availabilityStatus == 'FOR_LOAN'"
									class="btn btn-primary col-1 align-self-center" 
									type="button" 
									style="margin-right: 20px;"
									@click="loanBook()">Empréstimo</button>	
								<a class="btn btn-primary col-1 align-self-center" type="button" :href="'/add-review/' + this.id"><span class="fa fa-heart"></span></a>
							</div>
							<div v-if="idUserCurrent == idUserBook">
								<a class="btn btn-primary col-1 align-self-center" type="button" :href="'/add-review/' + this.id  "><span class="fa fa-heart"></span></a>
							</div>
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

	.card-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    border-radius: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
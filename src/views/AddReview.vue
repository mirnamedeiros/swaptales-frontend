<script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import { format } from 'date-fns';

  export default {
      name: 'AddReview',
      components: {
        NavBar, 
        Footer
      },

      data() {
          return {
              review : {
                idAuthorReview: localStorage.getItem('currentUser'),
                idBook: this.$route.params.id,
                reviewDate: format(new Date(), 'MM-dd-yyyy'),
                text: '',
                stars: 5,
              },
              book: { },
          }
      },
      mounted(){
        this.findBook(this.review.idBook);
      },
      methods: {
        onFileChange(event) {
          this.file = event.target.files[0];
        },

        addReview(){

            fetch('http://localhost:8080/swaptales/api/reviews', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.review),
            })
                .then(response => {
                if (response.status === 201) {
                    console.log('Livro adicionado com sucesso');
                    this.$router.push('/books');
                } else {
                    console.error('Erro ao adicionar review:', response.statusText);
                }
                })
                .catch(error => {
                console.error('Erro ao fazer a solicitação:', error);
                });
        },
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
            this.book.availabilityStatus = data.availabilityStatus;
            this.book.countDaysLoan = data.countDaysLoan;
            this.idUserBook = data.ownerUser.id;
        },
      },
          
  }
</script>

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>

<template>
    <main>
      <NavBar/>
        <div class="my-5">
            <h1 class="text-center mb-3">Adicionar Análise</h1>

            <div class="d-flex justify-content-center">
                <div class="card-profile p-5">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-5">
                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img :src="book.urlImg" width="155"/></div>
                                </div>
                            </div>
                            <div class="details col-md-7">
                                <h3 class="product-title">{{ book.title }}</h3>
                                <div class="rating">
                                    <span class="review-no">{{ book.countReview }} reviews</span>
                                </div>
                                <h5 class="titles">Linguagem:
                                    <span>{{ book.idioma }}</span>
                                </h5>
                                <h5 class="titles">Escritor(a):
                                    <span>{{ book.author }}</span>
                                </h5>

                                <p class="product-description">{{ book.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-auto w-25 mt-5 " style="max-width:100%;">
              <form @submit.prevent="addReview">

                <div class="col-md-12 form-group mb-3">
                  <label for="msg" class="form-label">Mensagem</label>
                  <input id="msg"  type="text" name="msg" class="form-control" placeholder="Insira sua mensagem" required v-model="review.text" >
                </div>

                <label for="edition" class="form-label">Estrela</label>
                <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="review.stars">
                    <option value="0" selected >0 Estrela</option>
                    <option value="1">1 Estrela</option>
                    <option value="2">2 Estrela</option>
                    <option value="3">3 Estrela</option>
                    <option value="4">4 Estrela</option>
                    <option value="5">5 Estrela</option>
                </select>

                <div class="col-md-12 form-group">
                  <input class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Submit">
                </div>
              </form>
            </div>
          </div>
    </main>
    <!-- <Footer/> -->
</template>
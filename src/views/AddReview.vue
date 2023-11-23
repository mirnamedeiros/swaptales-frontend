<template>
    <main>
      <NavBar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Adicionar Análise</h2>
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
          }
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
        }
      },
          
  }
</script>

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>
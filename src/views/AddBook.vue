<template>
    <main>
      <NavBar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Adicionar livro</h2>
              <form @submit.prevent="addBook">
                <div class="col-md-12 form-group mb-3">
                  <label for="title" class="form-label">Titulo</label>
                  <input id="title"  type="text" name="title" class="form-control" placeholder="Insira o titulo" required v-model="book.title">
                </div>

                <div class="col-md-12 form-group mb-3">
                  <label for="author" class="form-label">Autor</label>
                  <input id="author" type="text"  name="author" class="form-control" placeholder="Insira o autor" required v-model="book.author" >
                </div>
              
                <div class="col-md-12 form-group mb-3">
                  <label for="edition" class="form-label">Edição</label>
                  <input id="edition" type="text"  name="edition" class="form-control" placeholder="Insira a edição" required v-model="book.edition" >
                </div>

              <label for="edition" class="form-label">Objetivo</label>
              <select class="form-select mb-3" aria-label=".form-select-lg example">
                <option value="1" selected>Venda</option>
                <option value="2">Troca</option>
                <option value="3">Empréstimo</option>
              </select>

              <div class="col-md-12 form-group mb-3">
                <input id="file" type="file" accept="image/*"> 
              </div>

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

  export default {
      name: 'AddBook',
      components: {
        NavBar, 
        Footer
      },

      data() {
          return {
              book : {
                title: "",
                author: "",
                edition: 1,
                ownerUserId: localStorage.getItem('currentUser')
              }
          }
      },

      methods: {
          addBook(){

              alert(JSON.stringify(this.book))

              fetch('http://localhost:8080/swaptales/api/books', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.book),
              })
                .then(response => {
                  if (response.status === 200) {
                    console.log('Livro adicionado com sucesso');
                    this.$router.push('/books');
                  } else {
                    console.error('Erro ao adicionar livro:', response.statusText);
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
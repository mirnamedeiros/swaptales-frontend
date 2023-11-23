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

                <div class="col-md-12 form-group mb-3">
                  <label for="publishingYear" class="form-label">Ano de publicação</label>
                  <input id="publishingYear" type="number"  name="publishingYear" class="form-control" placeholder="Insira o ano de publicação" required v-model="book.publishingYear" >
                </div>

                <label for="edition" class="form-label">Condição do livro</label>
                <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="book.conditionBook">
                  <option value="NOVO" selected >Novo</option>
                  <option value="SEMI_NOVO">Semi novo</option>
                  <option value="USADO">Usado</option>
                  <option value="COM_DEFEITO">Com defeito</option>
                </select>

                <label for="edition" class="form-label">Objetivo</label>
                <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="book.availabilityStatus">
                  <option value="FOR_SALE" selected >Venda</option>
                  <option value="FOR_TRADE">Troca</option>
                  <option value="FOR_LOAN">Empréstimo</option>
                </select>

                <div class="col-md-12 form-group mb-3">
                  <label for="description" class="form-label">Descrição</label>
                  <input id="description"  type="text" name="description" class="form-control" placeholder="Insira a descrição" required v-model="book.description" >
                </div>

                <div class="col-md-12 form-group mb-3">
                  <input id="file" type="file" accept="image/*" @change="onFileChange"> 
                </div>

                <div v-if="book.availabilityStatus == 'FOR_SALE'">
                  <div class="col-md-12 form-group mb-3">
                    <label for="price" class="form-label">Preço</label>
                    <input id="price" type="number"  name="price" class="form-control" placeholder="Insira o preço" required v-model="book.price" >
                  </div>
                </div>

                <div v-if="book.availabilityStatus == 'FOR_LOAN'">
                  <div class="col-md-12 form-group mb-3">
                    <label for="days" class="form-label">Quantidade de dias para emprestimo:</label>
                    <input id="days" type="number"  name="days" class="form-control" placeholder="Insira a quantidade de dias" required v-model="book.countDaysLoan" >
                  </div>
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
                urlImg: "",
                ownerUserId: localStorage.getItem('currentUser'),
                availabilityStatus: "FOR_SALE",
                price: 0,
                publishingYear: "",
                countDaysLoan: "",
                conditionBook: "NOVO",
                description: "",
              },
              file: null,
          }
      },

      methods: {
        onFileChange(event) {
          this.file = event.target.files[0];
        },

        addBook(){

          const formData = new FormData();
          formData.append('file', this.file);

          fetch('http://localhost:8080/swaptales/api/images', {
            method: 'POST',
            body: formData,
          }).then(response => {
              if (!response.ok) {
                throw new Error(`Erro no upload: ${response.statusText}`);
              }
              return response.text();
            })
            .then(data => {
              if(data){
                console.log(data);
                this.book.urlImg = data;

                fetch('http://localhost:8080/swaptales/api/books', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(this.book),
                })
                  .then(response => {
                    if (response.status === 200) {
                      alert('Livro adicionado com sucesso');
                      this.$router.push('/books');
                    } else {
                      alert('Erro ao adicionar livro: ' +  response.statusText);
                    }
                  })
                  .catch(error => {
                    alert('Erro ao fazer a solicitação: ' +  error);
                  });
              }
            })
            .catch(error => {
              alert('Erro ao fazer a solicitação para a api de imagens: ' + error);
            })
        }
      },
          
  }
</script>

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>
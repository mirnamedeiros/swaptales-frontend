<template>
    <main>
      <NavBar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Adicionar livro</h2>
              <Form @submit="addBook">
                <div class="col-md-12 form-group mb-3">
                  <label for="title" class="form-label">Titulo *</label>
                  <Field 
                    id="title"  
                    type="text" 
                    name="title" 
                    class="form-control" 
                    placeholder="Insira o titulo" 
                    v-model="book.title" 
                    :rules="titleValidation">
                  </Field>
                  <ErrorMessage name="title" class="invalid"/>
                </div>

                <div class="col-md-12 form-group mb-3">
                  <label for="author" class="form-label">Autor *</label>
                  <Field 
                    id="author" 
                    type="text"  
                    name="author" 
                    class="form-control" 
                    placeholder="Insira o autor" 
                    v-model="book.author" 
                    :rules="authorValidation">
                  </Field>
                  <ErrorMessage name="author" class="invalid"/>
                </div>
              
                <div class="col-md-12 form-group mb-3">
                  <label for="edition" class="form-label">Edição *</label>
                  <Field 
                    id="edition" 
                    type="text"  
                    name="edition" 
                    class="form-control"
                    placeholder="Insira a edição" 
                    v-model="book.edition" 
                    :rules="editionValidation">
                  </Field>
                  <ErrorMessage name="edition" class="invalid"/>
                </div>

                <div class="col-md-12 form-group mb-3">
                  <label for="publishingYear" class="form-label">Ano de publicação *</label>
                  <Field 
                    id="publishingYear" 
                    type="number"  
                    name="publishingYear" 
                    class="form-control" 
                    placeholder="Insira o ano de publicação" 
                    v-model="book.publishingYear"
                    :rules="pYearValidation">
                  </Field>
                  <ErrorMessage name="publishingYear" class="invalid"/>
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
                  <Field 
                    id="description"  
                    type="text" 
                    name="description" 
                    class="form-control" 
                    placeholder="Insira a descrição" 
                    v-model="book.description">
                  </Field>
                  <ErrorMessage name="description" class="invalid"/>
                </div>

                <div class="col-md-12 form-group mb-3">
                  <input id="file" type="file" accept="image/*" @change="onFileChange"> 
                </div>

                <div v-if="book.availabilityStatus == 'FOR_SALE'">
                  <div class="col-md-12 form-group mb-3">
                    <label for="price" class="form-label">Preço *</label>
                    <Field 
                      id="price" 
                      type="number"  
                      name="price" 
                      class="form-control" 
                      placeholder="Insira o preço" 
                      v-model="book.price" 
                      :rules="priceValidation">
                    </Field>
                    <ErrorMessage name="price" class="invalid"/>
                  </div>
                </div>

                <div v-if="book.availabilityStatus == 'FOR_LOAN'">
                  <div class="col-md-12 form-group mb-3">
                    <label for="days" class="form-label">Quantidade de dias para empréstimo *</label>
                    <Field 
                      id="days" 
                      type="number"  
                      name="days" 
                      class="form-control" 
                      placeholder="Insira a quantidade de dias" 
                      v-model="book.countDaysLoan" 
                      :rules="daysValidation">
                    </Field>
                    <ErrorMessage name="days" class="invalid"/>
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <input class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Submit">
                </div>

              </Form>

              <v-snackbar v-model="snackbar.visible" auto-height :color="snackbar.color" :multi-line="snackbar.mode === 'multi-line'" :timeout="snackbar.timeout" :top="snackbar.position === 'top'">
                <v-layout align-center pr-4 class="d-flex align-items-center">
                  <v-icon dark large style="margin-right: 20px;">
                    {{ snackbar.icon }}
                  </v-icon>
                  <v-layout column class="d-flex flex-column">
                    <div>
                      <strong>{{ snackbar.title }}</strong>
                    </div>
                    <div>{{ snackbar.text }}</div>
                  </v-layout>
                </v-layout>
                <v-btn v-if="snackbar.timeout === 0" icon @click="snackbar.visible = false">
                  <v-icon>clear</v-icon>
                </v-btn>
              </v-snackbar>

            </div>
          </div>
    </main>
    <!-- <Footer/> -->
</template>


<script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import Modal from '../components/Modal.vue';
  import { Form, Field, ErrorMessage } from 'vee-validate';

  export default {
      name: 'AddBook',
      components: {
        NavBar, 
        Footer,
        Modal,
        Form,
        Field,
        ErrorMessage
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
            snackbar: {
              color: null,
              icon: null,
              mode: null,
              position: "top",
              text: null,
              timeout: 3000,
              title: null,
              visible: false
            },
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
                this.snackbar = {
                  color: "error",
                  icon: "fa-solid fa-circle-exclamation",
                  mode: "multi-line",
                  position: "top",
                  timeout: 1000,
                  title: "Erro no upload:",
                  text: response.statusText,
                  visible: true
                };
                // throw new Error(`Erro no upload: ${response.statusText}`);
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
                      this.snackbar = {
                        color: "success",
                        icon: "fa-solid fa-circle-check",
                        mode: "multi-line",
                        position: "top",
                        timeout: 1000,
                        title: "",
                        text: "Livro adicionado com sucesso.",
                        visible: true
                      };
                      setTimeout(() => {
                        this.$router.go(-1);
                      }, this.snackbar.timeout);
                    } else {
                      this.snackbar = {
                        color: "error",
                        icon: "fa-solid fa-circle-exclamation",
                        mode: "multi-line",
                        position: "top",
                        timeout: 1000,
                        title: "Erro ao adicionar livro:",
                        text: response.statusText,
                        visible: true
                      };
                      setTimeout(() => {
                        this.$router.go(-1);
                      }, this.snackbar.timeout);
                    }
                  })
                  .catch(error => {
                    this.snackbar = {
                      color: "error",
                      icon: "fa-solid fa-circle-exclamation",
                      mode: "multi-line",
                      position: "top",
                      timeout: 1000,
                      title: "Erro ao fazer a solicitação: ",
                      text: error,
                      visible: true
                    };
                    setTimeout(() => {
                      this.$router.go(-1);
                    }, this.snackbar.timeout);
                  });
              }
            })
            .catch(error => {
              this.snackbar = {
                color: "error",
                icon: "fa-solid fa-circle-exclamation",
                mode: "multi-line",
                position: "top",
                timeout: 1000,
                title: "Erro ao fazer a solicitação para a api de imagens: ",
                text: error,
                visible: true
              };
              setTimeout(() => {
                this.$router.go(-1);
              }, this.snackbar.timeout);
            })
        },
        
        isRequired(value, fieldName) {
          console.log(fieldName)
          if (!value) {
            return `${fieldName} é obrigatório.`;
          }
          return true;
        },
        titleValidation(value) {
          return this.isRequired(value, 'O título');
        },
        authorValidation(value) {
          return this.isRequired(value, 'O autor');
        },
        editionValidation(value) {
          if(value <= 0) {
            return "Informe uma edição válida";
          }
          return this.isRequired(value, 'A edição');
        },
        pYearValidation(value) {
          if(value <= 0) {
            return "Informe um ano de publicação válido";
          }
          return this.isRequired(value, 'O ano de publicação');
        },
        priceValidation(value) {
          if(value < 0) {
            return "Informe um preço válido";
          }
          return this.isRequired(value, 'O preço');
        },
      },
          
  }
</script>

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');

    .invalid {
      color: #FD5A46;
    }
</style>
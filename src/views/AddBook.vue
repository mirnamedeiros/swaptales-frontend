<template>
    <main>
      <NavBar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Adicionar livro</h2>
              <form @submit.prevent="addBook">
                <!--Title-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <input id="title"  type="text" name="title" class="form-control" placeholder="Título" required v-model="book.title">
                  </div>
                </div>

                
                <!--Author-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <input id="author" type="text"  name="author" class="form-control" placeholder="Autor" required v-model="book.Author" >
                    </div>
                  </div>
               
                
               
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Submit">
                  </div>
                </div>
      
                <div>
                  
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
                  title: '',
                  Author: '',
              }
          }
      },

      methods: {
          addBook(){
              fetch('http://localhost:8080/add', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(this.Book)
              })
              .then(data => {
                  console.log(data)
                  this.$router.push("/");
              })

          }
      },
          
  }
</script>

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>
<template>
    <main>
        <NavBar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
                <h2 class="text-center mb-3">Editar Dados do Usuario</h2>
                <form @submit.prevent="editUser">

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input id="name"  type="text" name="name" class="form-control" placeholder="Insira o nome completo" v-model="user.name">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                    <label for="telephone" class="form-label">Telefone</label>
                    <input id="telephone" type="text"  name="telephone" class="form-control" placeholder="Insira o telefone" v-model="user.telephone" >
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Editar">
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
      name: 'EditUser',
      components: {
        NavBar, 
        Footer
      },

      data() {
          return {
              user : {
                name: "",
                telephone: "",
                id: localStorage.getItem('currentUser')
              }
          }
      },

      methods: {
          editUser(){

              alert(JSON.stringify(this.user))

              fetch('http://localhost:8080/swaptales/api/users', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.user),
              })
                .then(response => {
                  if (response.status === 200) {
                    console.log('usuario editado com sucesso');
                    this.$router.push('/profile');
                  } else {
                    console.error('Erro ao editar usuario:', response.statusText);
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
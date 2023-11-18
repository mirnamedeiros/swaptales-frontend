<script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'

  export default {
      name: 'AddUser',
      components: {
        NavBar, 
        Footer
      },

      data() {
          return {
              user : {
                name: "",
                cpf: "",
                email: "",
                telephone: "",
                username: "",
                password: ""
              }
          }
      },

      methods: {
          addUser(){

              alert(JSON.stringify(this.user))

              fetch('http://localhost:8080/swaptales/api/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.user),
              })
                .then(response => {
                  if (response.status === 200) {
                    console.log('usuario criado com sucesso');
                    this.$router.push('/');
                  } else {
                    console.error('Erro ao cadastrar usuario:', response.statusText);
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
    <main>
        <div class="my-5">
            <div class="mx-auto w-50 " style="max-width:100%;">
                <h2 class="text-center mb-3">Cadastro do Usuario</h2>
                <form @submit.prevent="addUser">

                    <div class="col-md-12 form-group mb-3">
                      <label for="username" class="form-label">Usuário</label>
                      <input id="username" type="text"  name="username" class="form-control" placeholder="Insira o usuário" required v-model="user.username" >
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="password" class="form-label">Senha</label>
                      <input id="password" type="password"  name="password" class="form-control" placeholder="Insira a senha" required v-model="user.password" >
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="name" class="form-label">Nome</label>
                      <input id="name"  type="text" name="name" class="form-control" placeholder="Insira o nome completo" required v-model="user.name">
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="cpf" class="form-label">CPF</label>
                      <input id="cpf" type="text"  name="cpf" class="form-control" placeholder="Insira o CPF" required v-model="user.cpf" >
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input id="email" type="email"  name="email" class="form-control" placeholder="Insira o email" required v-model="user.email" >
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="telephone" class="form-label">Telefone</label>
                      <input id="telephone" type="text"  name="telephone" class="form-control" placeholder="Insira o telefone" required v-model="user.telephone" >
                    </div>

                    <!-- TODO: change button and placeholder text -->
                    <div class="col-md-12 form-group mb-3">
                      <input id="file" type="file" accept="image/*"> 
                    </div>

                
                <div class="row">
                    <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Cadastrar">
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

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>
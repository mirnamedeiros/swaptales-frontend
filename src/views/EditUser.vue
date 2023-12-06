<template>
    <main>
        <NavBar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
                <h2 class="text-center mb-3">Editar Dados do Usuario</h2>
                <Form @submit="editUser">

                  <div class="col-md-12 form-group mb-3">
                    <label for="name" class="form-label">Nome *</label>
                    <Field 
                      id="name"  type="text" name="name" 
                      class="form-control" placeholder="Insira o nome completo" 
                      v-model="user.name"
                      :rules="nameValidation">
                    </Field>
                    <ErrorMessage name="name" class="invalid"/>
                  </div>

                  <div class="col-md-12 form-group mb-3">
                    <label for="telephone" class="form-label">Telefone *</label>
                    <Field
                      id="telephone" type="text"  name="telephone" 
                      class="form-control" placeholder="Insira o telefone" 
                      v-model="user.telephone"
                      :rules="phoneValidation">
                    </Field>
                    <ErrorMessage name="telephone" class="invalid"/>
                  </div>
                
                  <div class="row">
                      <div class="col-md-12 form-group">
                      <input class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Editar">
                      </div>
                  </div>

                </Form>
        
            </div>
        </div>
    </main>
    <!-- <Footer/> -->
</template>


<script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import { Form, Field, ErrorMessage } from 'vee-validate';

  export default {
      name: 'EditUser',
      components: {
        NavBar, 
        Footer,
        Form,
        Field,
        ErrorMessage
      },

      data() {
          return {
              user : "",
              id: "",
          }
      },
      mounted(){
        this.id = localStorage.getItem('currentUser');
        this.getUser(this.id);
      },
      methods: {
          getUser(id){
            fetch(`http://localhost:8080/swaptales/api/users/${id}`, {
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
                        this.user = JSON.parse(data);
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
          },
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
                    this.$router.push('/profile/' + this.id);
                  } else {
                    console.error('Erro ao editar usuario:', response.statusText);
                  }
                })
                .catch(error => {
                  console.error('Erro ao fazer a solicitação:', error);
                });

          },
          nameValidation(value) {
            if (!value || !value.length) {
              return "O nome é obrigatório.";
            }
            if (value.length < 3) {
              return "O nome precisa ter no mínimo 3 caracteres.";
            }
            return true;
          },
          phoneValidation(value) {
            if (!value || !value.length) {
              return "O número de telefone é obrigatório";
            }
            if (!/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}?$/.test(value)) {
              return "Informe um número de telefone válido com 11 dígitos.";
            }
            return true;
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
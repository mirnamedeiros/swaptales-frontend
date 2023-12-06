<script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import { Form, Field, ErrorMessage } from 'vee-validate';

    export default {
      name: 'AddUser',
      components: {
        NavBar, 
        Footer,
        Form,
        Field,
        ErrorMessage
      },
      data() {
          return {
              user : {
                name: "",
                cpf: "",
                email: "",
                telephone: "",
                username: "",
                password: "",
                urlImg: "",
              },
              file: null,
              showPassword: false,
          }
      },

      methods: {

          onFileChange(event) {
            this.file = event.target.files[0];
          },

          addUser(){

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
                  this.user.urlImg = data;

                  fetch('http://localhost:8080/swaptales/api/users', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.user),
                  })
                    .then(res => {
                      if (res.status === 200) {
                        alert('Usuario criado com sucesso');
                        this.$router.push('/');
                      } else {
                        alert('Erro ao cadastrar usuario:', res.statusText);
                      }
                    })
                    .catch(error => {
                      alert('Erro ao fazer a solicitação para a api de usuarios:', error);
                    });
                }
              })
              .catch(error => {
                alert('Erro ao fazer a solicitação para a api de imagens:', error);
              })
          },

          toggleShow() {
            this.showPassword = !this.showPassword;
          },

          usernameValidation(value) {
            if (!value || !value.length) {
              return "O nome de usuário é obrigatório.";
            }
            if (value.length < 3) {
              return "O nome de usuário precisa ter no mínimo 3 caracteres.";
            }
            return true;
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
          passwordValidation(value) {
            if (!value || !value.length) {
              return "A senha é obrigatória.";
            }
            if (value.length < 8) {
              return "A senha precisa ter no mínimo 8 caracteres.";
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
          cpfValidation(value) {
            if (!value || !value.length) {
              return "O número de CPF é obrigatório.";
            }
            if (!/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}?$/.test(value)) {
              return "Informe um CPF válido.";
            }
            return true;
          },
          emailValidation(value) {
            if (!value || !value.length) {
              return "O email é obrigatório.";
            }
            if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(value)) {
              return "Informe um email válido.";
            }
            return true;
          },
      },
    }

</script>

<template>
    <main>
        <div class="my-5">
            <div class="mx-auto w-50 " style="max-width:100%;">
                <h2 class="text-center mb-3">Cadastro do Usuario</h2>
                <Form @submit="addUser">

                    <div class="col-md-12 form-group mb-3">
                      <label for="username" class="form-label">Usuário *</label>
                      <Field 
                        id="username" type="text"  name="username" 
                        class="form-control"
                        placeholder="Insira o usuário" 
                        :rules="usernameValidation"
                        v-model="user.username">
                      </Field>
                      <!-- TODO change color to red (APPLY TO THE REST)-->
                      <ErrorMessage name="username" class="invalid"/>
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="password" class="form-label">Senha *</label>
                      <Field
                        v-bind:type="[showPassword ? 'text' : 'password']"
                        id="password" type="text"  name="password" 
                        class="form-control" placeholder="Insira a senha" 
                        :rules="passwordValidation"
                        v-model="user.password">
                      </Field>
                      <i class="fa-regular field-icon fa-lg" :class="{'fa-eye-slash': showPassword, 'fa-eye': !showPassword}" @click="toggleShow"></i>
                      <ErrorMessage name="password" class="invalid"/>
                    </div>

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
                      <label for="cpf" class="form-label">CPF *</label>
                      <Field
                        id="cpf" type="text"  name="cpf" 
                        class="form-control" placeholder="Insira o CPF" 
                        v-model="user.cpf"
                        :rules="cpfValidation">
                      </Field>
                      <ErrorMessage name="cpf" class="invalid"/>
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email *</label>
                      <Field 
                        id="email" type="email"  name="email" 
                        class="form-control"
                        placeholder="Insira o email" 
                        v-model="user.email"
                        :rules="emailValidation">
                      </Field>
                        <ErrorMessage name="email" class="invalid"/>
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="telephone" class="form-label">Telefone *</label>
                      <Field
                        id="telephone" type="phone"  name="telephone" 
                        class="form-control" placeholder="Insira o telefone" 
                        v-model="user.telephone"
                        :rules="phoneValidation">
                      </Field>
                      <ErrorMessage name="telephone" class="invalid"/>
                    </div>

                    <!-- TODO: change button and placeholder text -->
                    <div class="col-md-12 form-group mb-3">
                      <input id="file" type="file" accept="image/*" @change="onFileChange"> 
                    </div>

                
                <div class="row">
                    <div class="col-md-12 form-group">
                    <input :loading="loading" class="btn btn-primary w-100" style="font-size: 1.2rem;" type="submit" value="Cadastrar">
                    </div>
                </div>
        
                <div>
                    
                </div>
              </Form>
        
            </div>
        </div>
    </main>
    <!-- <Footer/> -->
</template>

<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');

    .invalid {
      color: #FD5A46;
    }
</style>
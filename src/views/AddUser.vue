<script>
  import NavBar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import vueMask from 'vue-jquery-mask'
  import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';

    export default {
      name: 'AddUser',
      components: {
        NavBar, 
        Footer,
        vueMask,
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

          onSubmit(values) {
            this.$validator.validateAll().then(function(success) {
              if (!success) return;

              alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
            })
          }
      },
    }

  // FORM VALIDATION
  
  // NOTE: the regex is working but it needs to be a Field component to work properly

  defineRule("name", (value) => {
    if (!value || !value.length) {
      return "Este campo é obrigatório";
    }
    if (value.length < 3) {
      return "O campo precisa ter no mínimo 3 caracteres.";
    }
    return true;
  });
  defineRule("password", (value) => {
    if (!value || !value.length) {
      return "Este campo é obrigatório";
    }
    if (value.length < 8) {
      return "A senha precisa ter no mínimo 8 caracteres.";
    }
    return true;
  });
  defineRule("phone", (value) => {
    if (!value || !value.length) {
      return "Este campo é obrigatório";
    }
    if (!value.length > 11 && /[0-9-]+/.test(value)) {
      return "Informe um número de telefone válido";
    }
    return true;
  });
  defineRule("cpf", (value) => {
    if (!value || !value.length) {
      return "Este campo é obrigatório";
    }
    if (!/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(value)) {
      return "Informe um CPF válido";
    }
    return true;
  });
  defineRule("email", (value) => {
    if (!value || !value.length) {
      return "Este campo é obrigatório";
    }
    if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(value)) {
      return "Informe um email válido";
    }
    return true;
  });

</script>

<template>
    <main>
        <div class="my-5">
            <div class="mx-auto w-50 " style="max-width:100%;">
                <h2 class="text-center mb-3">Cadastro do Usuario</h2>
                <Form @submit="onSubmit">

                    <div class="col-md-12 form-group mb-3">
                      <label for="username" class="form-label">Usuário</label>
                      <Field 
                        id="username" type="text"  name="username" 
                        class="form-control" placeholder="Insira o usuário" 
                        rules="name"
                        v-model="user.username">
                      </Field>
                      <!-- TODO change color to red (APPLY TO THE REST)-->
                      <ErrorMessage name="username"/>
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="password" class="form-label">Senha</label>
                      <!-- TODO change to Field component (APPLY TO vue-mask COMPONENT TOO)-->
                      <input 
                        v-if="showPassword" type="text" 
                        class="form-control" placeholder="Insira a senha" 
                         v-model="user.password" 
                         rules="password">
                      <input 
                        v-else type="password" 
                        class="form-control" placeholder="Insira a senha" 
                         v-model="user.password"
                         rules="password">
                      <i class="fa-regular field-icon fa-lg" :class="{'fa-eye-slash': showPassword, 'fa-eye': !showPassword}" @click="toggleShow"></i>
                      <ErrorMessage name="password" />
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="name" class="form-label">Nome</label>
                      <Field 
                        id="name"  type="text" name="name" 
                        class="form-control" placeholder="Insira o nome completo" 
                        v-model="user.name"
                        rules="name">
                      </Field>
                        <ErrorMessage name="name" />
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="cpf" class="form-label">CPF</label>
                      <vue-mask
                        id="cpf" type="text"  name="cpf" 
                        class="form-control" placeholder="Insira o CPF" 
                        v-model="user.cpf"
                        mask="000.000.000-00"
	                      :raw="true"
                        rules="cpf">
                      </vue-mask>
                      <ErrorMessage name="cpf" />
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email</label>
                      <Field 
                        id="email" type="email"  name="email" 
                        class="form-control" placeholder="Insira o email" 
                        v-model="user.email"
                        rules="email">
                      </Field>
                        <ErrorMessage name="email" />
                    </div>

                    <div class="col-md-12 form-group mb-3">
                      <label for="telephone" class="form-label">Telefone</label>
                      <vue-mask 
                        id="telephone" type="text"  name="telephone" 
                        class="form-control" placeholder="Insira o telefone" 
                        v-model="user.telephone"
                        mask="(00) 00000-0000"
	                      :raw="true"
                        rules="phone">
                      </vue-mask>
                      <ErrorMessage name="phone" />
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
</style>
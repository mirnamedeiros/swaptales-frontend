<template>
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
		<div class="container-login">
				<div class="login">
					<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
						<div class="text w-100">
							<h2>Bem vindo!</h2>
							<p>Ainda não tem uma conta?</p>
							<a href="/register" class="btn btn-white btn-outline-white">Cadastre-se</a>
						</div>
					</div>
					<div class="login-wrap p-4 p-lg-5">
					<div class="d-flex">
						<div class="w-100">
							<h3 class="mb-4">Login</h3>
						</div>
					</div>
						<Form @submit="login" class="signin-form" >
							<div class="form-group mb-3">
								<label for="username" class="form-label">Usuário</label>
								<Field 
									id="username" type="text"  name="username" 
									class="form-control"
									placeholder="Usuário" 
									:rules="usernameValidation"
									v-model="auth.username">
								</Field>
								<!-- TODO change color to red (APPLY TO THE REST)-->
								<ErrorMessage name="username" class="invalid"/>
							</div>
							<div class="form-group mb-3">
								<label for="password" class="form-label">Senha</label>
								<Field
									v-bind:type="[showPassword ? 'text' : 'password']"
									id="password" type="text"  name="password" 
									class="form-control" placeholder="Insira a senha" 
									:rules="passwordValidation"
									v-model="auth.password">
								</Field>
								<i class="fa-regular field-icon fa-lg" :class="{'fa-eye-slash': showPassword, 'fa-eye': !showPassword}" @click="toggleShow"></i>
								<ErrorMessage name="password" class="invalid"/>
							</div>
							<div class="form-group">
								<button id="btn" type="submit" class="form-control btn btn-primary submit px-3 whiteLink">
									<a style="color: #000;">Entrar</a>
								</button>
							</div>
							<!-- <div class="form-group d-md-flex">
								<div class="w-50 text-left">
									<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
												<input type="checkbox" checked>
												<span class="checkmark"></span>
												</label>
											</div>
											<div class="w-50 text-md-right">
												<a href="#">Forgot Password</a>
											</div>
							</div> -->
						</Form>
					</div>
		      </div>
		</div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import vuex from 'vuex'
import { Form, Field, ErrorMessage } from 'vee-validate';


  export default {
      name: 'Login',
      components: {
		Form,
        Field,
        ErrorMessage
      },

      data() {
        return {
          auth : {
              username: "",
              password: "",
              error: null,
              sucess: false,
          },
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
		  showPassword: false,
        }
      },

      methods: {
		login: async function(e) {
			
			const auth = { username: this.auth.username, password: this.auth.password };
			try {
				const response = await axios.post(
					"http://localhost:8080/swaptales/api/users/login",
					auth,
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (response.status === 200) {
					this.snackbar = {
						color: "success",
						icon: "fa-solid fa-circle-check",
						mode: "multi-line",
						position: "top",
						timeout: 1000,
						title: "",
						text: "Logado com sucesso!",
						visible: true
					};
					window.localStorage.clear();
					window.localStorage.setItem("jwtToken", response.data.token);
					window.localStorage.setItem("currentUser", response.data.user.id);
					window.location.href = '/books';
				} else {
					this.snackbar = {
						color: "error",
						icon: "fa-solid fa-circle-exclamation",
						mode: "multi-line",
						position: "top",
						timeout: 3000,
						title: "Erro de autenticação: ",
						text: response.statusText,
						visible: true
					};
				}
			} catch (error) {
				this.snackbar = {
				color: "error",
				icon: "fa-solid fa-circle-exclamation",
				mode: "multi-line",
				position: "top",
				timeout: 3000,
				title: "Erro ao fazer login: ",
				text: error,
				visible: true
				};
			}
		},
		toggleShow() {
			this.showPassword = !this.showPassword;
		},

		usernameValidation(value) {
			if (!value || !value.length) {
				return "Informe seu nome de usuário.";
			}
			return true;
		},

		passwordValidation(value) {
			if (!value || !value.length) {
				return "Informe sua senha.";
			}
			return true;
		},
    }
  }
</script>


<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');

	.invalid {
      color: #FD5A46;
    }
</style>
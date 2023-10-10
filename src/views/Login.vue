<template>
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
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
							<form class="signin-form" @submit="login">
			      		<div class="form-group mb-3">
			      			<input v-model="auth.username" type="text" class="form-control" placeholder="Usuário" required>
			      		</div>
		            <div class="form-group mb-3">
		              <input v-model="auth.password" type="password" class="form-control" placeholder="Senha" required>
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
		          </form>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import vuex from 'vuex'


  export default {
      name: 'Login',
      components: {
      },

      data() {
		return {
              auth : {
                  username: "",
                  password: "",
				  error: null,
				  sucess: false
              }
          }
      },

      methods: {
		login: async function(e) {
			e.preventDefault();
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
					window.localStorage.clear();
					window.localStorage.setItem("jwtToken", response.data.token);
					window.localStorage.setItem("currentUser", response.data.user.id);
					alert(JSON.stringify(response.data));
					window.location.href = '/books';
					alert('Logado com sucesso');
				} else {
					alert("Erro de autenticação: " + response.statusText);
				}
			} catch (error) {
				console.error("Erro ao fazer login:", error);
			}
		}
      }
  }
</script>


<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>
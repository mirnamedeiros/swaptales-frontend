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
								<a href="#" class="btn btn-white btn-outline-white">Cadastre-se</a>
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
		login: async function() {

			const auth = { username: this.auth.username, password: this.auth.password };
			alert(JSON.stringify(auth))
			// fetch('http://localhost:8080/swaptales/api/users/login', {
            //       method: 'POST',
            //       headers: {
            //           'Content-Type': 'application/json;charset=UTF-8',
            //       },
            //       body: JSON.stringify(auth),
            //   }) .then((response) => {
			// 		if (response.status == 200) {
			// 			alert(response.statusText);
			// 		}
			// 		else {
			// 			alert("Error: " + response.statusText);
			// 		}      
			// 		return response.json();
			// 	}) .then(data => console.log(data));
			const res = await axios.post("http://localhost:8080/swaptales/api/users/login", JSON.stringify(auth), {headers: {
                      'Content-Type': 'application/json',
                  }})

			if(res === undefined){
				window.localStorage.clear();
				window.localStorage.setItem("jwtToken", response.data.accessToken);
				window.location.href = "/books";
			} 
			// .then((response) => {
			// 	if (response.data.accessToken) {
			// 	window.localStorage.clear();
			// 	window.localStorage.setItem("jwtToken", response.data.accessToken);
			// 	}
			// 	window.location.href = "/books";
			// });
		}
			
      }
          
  }
</script>


<style lang="scss" scoped>
    @import url('../assets/scss/style.scss');
    @import url('../assets/scss/form-login.scss');
</style>
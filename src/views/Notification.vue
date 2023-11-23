<script>
import NavBar from '../components/Navbar.vue'
import BookSwap from '../components/BookSwap.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Notification',
        components: {
            NavBar,
            BookSwap,
            Footer
        },
        head: {
        script: [
            { type: 'text/javascript', src: '../js/scripts.js', async: true, body: true}, // Insert in body
        ],
        },
        data() {
            return {
                exchanges: [],
                loans: []
            }
        },
        mounted(){
            let id = localStorage.getItem('currentUser');
            this.findExchanges(id);
            this.findLoans(id);
        },
        methods: {
            findExchanges(id){
                fetch(`http://localhost:8080/swaptales/api/transactions/exchange/user-pendent/${id}`, {
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
                            this.exchanges = JSON.parse(data);
                            console.log(this.exchanges);
                        }else{
                            console.log("Usuario não encontrado");
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                    });
            },
            acceptExchange(id){

				fetch(`http://localhost:8080/swaptales/api/transactions/exchange/accept/${id}`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'PUT',
				})
					.then(response => {
                    if (response.status === 200) {
                      console.log('Pedido de troca realizado com sucesso');
                      this.$router.push('/books');
                    } else {
                      console.error('Erro ao solicitar troca de um livro:', response.statusText);
                    }
                  })
                  .catch(error => {
                    console.error('Erro ao fazer a solicitação:', error);
                  });
            },
            findLoans(id){
                fetch(`http://localhost:8080/swaptales/api/transactions/loan/user-pendent/${id}`, {
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
                            this.loans = JSON.parse(data);
                        }else{
                            console.log("Usuario não encontrado");
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                    });
            },
            acceptLoan(id){

				fetch(`http://localhost:8080/swaptales/api/transactions/loan/accept/${id}`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'PUT',
				})
					.then(response => {
                    if (response.status === 200) {
                      console.log('Pedido de troca realizado com sucesso');
                      this.$router.push('/books');
                    } else {
                      console.error('Erro ao solicitar troca de um livro:', response.statusText);
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
        <NavBar/>
        <div class="container d-flex flex-column align-items-center mt-5">
            <div>
                <h1 class="text-center mb-5">Notificações</h1>

                <div v-if="exchanges.length > 0" class="text-center">
                    <div>
                        <h2 class="mb-5">Trocas</h2>
                    </div>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th scope="col">Usuário</th>
                                <th scope="col">Seu Livro</th>
                                <th scope="col">Livro do Usuário</th>
                                <th scope="col">Data da Solicitação</th>
                                <th scope="col">Opção</th>
                            </tr>
                        </thead>
                        <!-- TODO: strips on table, divisions and links, see why is not implementing the css-->
                        <tbody>
                            <tr v-for="(exchange, index) in exchanges">
                                <td>{{ exchange.user.name }}</td>
                                <td>{{ exchange.book.title }}</td>
                                <td>{{ exchange.bookExchange.title }}</td>
                                <td>{{ (exchange.dateTransaction) ? exchange.dateTransaction[2] + "/" + exchange.dateTransaction[1] + "/" + exchange.dateTransaction[0] : "-" }}</td>
                                <td>
                                    <button 
                                        class="btn btn-primary col-1 align-self-center" 
                                        type="button" 
                                        style="margin-right: 20px;"
                                        @click="acceptExchange(exchange.id)">Aceitar troca</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="loans.length > 0" class="text-center">
                    <div>
                        <h2 class="mb-5">Empréstimos</h2>
                    </div>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th scope="col">Usuário</th>
                                <th scope="col">Seu Livro</th>
                                <th scope="col">Data da Solicitação</th>
                                <th scope="col">Opção</th>
                            </tr>
                        </thead>
                        <!-- TODO: strips on table, divisions and links, see why is not implementing the css-->
                        <tbody>
                            <tr v-for="(loan, index) in loans">
                                <td>{{ loan.user.name }}</td>
                                <td>{{ loan.book.title }}</td>
                                <td>{{ (loan.dateLoan) ? loan.dateLoan[2] + "/" + loan.dateLoan[1] + "/" + loan.dateLoan[0] : "-" }}</td>
                                <td>
                                    <button 
                                        class="btn btn-primary col-1 align-self-center" 
                                        type="button" 
                                        style="margin-right: 20px;"
                                        @click="acceptLoan(loan.id)">Aceitar troca</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="exchanges.length == 0 && loans.length == 0">
                    <h2 class="mb-5">Não tem nenhuma notificação para você</h2>
                </div>
            </div>
            
        </div>
        <Footer/>
    </main>
</template>



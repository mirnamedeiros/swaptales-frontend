<script>
import NavBar from '../components/Navbar.vue'
import LoanTable from '../components/BookSwap.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Loans',
        components: {
            NavBar,
            LoanTable,
            Footer
        },
        data() {
            return {
                borroweds: [],
                loaneds: [],
            }
        },
        mounted() {
            let id = localStorage.getItem('currentUser');
            this.findBorrowed(id);
            this.findLoaned(id);
        },
        methods: {
            findBorrowed(id){
                fetch(`http://localhost:8080/swaptales/api/transactions/loan/all-borrowed/${id}`, {
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
                            this.borroweds = JSON.parse(data);
                        }else{
                            console.log("Usuario não encontrado");
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                    });
            },

            findLoaned(id){
                fetch(`http://localhost:8080/swaptales/api/transactions/loan/all-loaned/${id}`, {
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
                            this.loaneds = JSON.parse(data);
                        }else{
                            console.log("Usuario não encontrado");
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                    });
            },
        }
    }

    

</script>

<template>
    <main>
        <NavBar/>
        <div class="container mt-5">
            <div class="text-center">
                <div v-if="borroweds.length > 0">
                    <div>
                        <h2 class="mb-5">Empréstimos de Livros</h2>
                    </div>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th scope="col">Usuário</th>
                                <th scope="col">Livro</th>
                                <th scope="col">Data de Empréstimo</th>
                                <th scope="col">Data da Expectatica de Devolução</th>
                                <th scope="col">Data de Devolução</th>
                            </tr>
                        </thead>
                        <!-- TODO: strips on table, divisions and links, see why is not implementing the css-->
                        <tbody>
                            <tr v-for="(loan, index) in borroweds">
                                <td>{{ loan.user.name }}</td>
                                <td>{{ loan.book.title }}</td>
                                <td>{{ (loan.dateLoan) ? loan.dateLoan[2] + "/" + loan.dateLoan[1] + "/" + loan.dateLoan[0] : "-"}}</td>
                                <td>{{ (loan.expectedReturnDate) ? loan.expectedReturnDate[2] + "/" + loan.expectedReturnDate[1] + "/" + loan.expectedReturnDate[0] : "-" }}</td>
                                <td>{{ (loan.dateReturn) ? loan.dateReturn[2] + "/" + loan.dateReturn[1] + "/" + loan.dateReturn[0] : "-" }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="loaneds.length > 0">
                    <div>
                        <h2 class="mb-5 mt-5">Livros pegos emprestado</h2>
                    </div>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th scope="col">Usuário</th>
                                <th scope="col">Livro</th>
                                <th scope="col">Data de Empréstimo</th>
                                <th scope="col">Data da Expectatica de Devolução</th>
                                <th scope="col">Data de Devolução</th>
                            </tr>
                        </thead>
                        <!-- TODO: strips on table, divisions and links, see why is not implementing the css-->
                        <tbody>
                            <tr v-for="(loan, index) in loaneds">
                                <td>{{ loan.user.name }}</td>
                                <td>{{ loan.book.title }}</td>
                                <td>{{ (loan.dateLoan) ? loan.dateLoan[2] + "/" + loan.dateLoan[1] + "/" + loan.dateLoan[0] : "-"}}</td>
                                <td>{{ (loan.expectedReturnDate) ? loan.expectedReturnDate[2] + "/" + loan.expectedReturnDate[1] + "/" + loan.expectedReturnDate[0] : "-" }}</td>
                                <td>{{ (loan.dateReturn) ? loan.dateReturn[2] + "/" + loan.dateReturn[1] + "/" + loan.dateReturn[0] : "-" }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
</template>




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
                loans: []
            }
        },
        mounted() {
            let id = localStorage.getItem('currentUser');
            this.findBorrowed(id);
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
                            this.loans = JSON.parse(data);
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
                        <tr v-for="(loan, index) in loans">
                            <td>{{ loan.user.name }}</td>
                            <td>{{ loan.book.title }}</td>
                            <td>{{ (loan.dateLoan) ? loan.dateLoan : "-"}}</td>
                            <td>{{ (loan.expectedReturnDate) ? loan.expectedReturnDate : "-" }}</td>
                            <td>{{ (loan.dateReturn) ? loan.dateReturn : "-" }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </main>
</template>




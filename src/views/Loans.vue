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
            return {}
        },
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
                            <th scope="col">Data de Devolução</th>
                        </tr>
                    </thead>
                    <!-- TODO: strips on table, divisions and links, see why is not implementing the css-->
                    <tbody>
                        <tr>
                            <td>Wirt</td>
                            <td>Jogos Vorazes: Em Chamas</td>
                            <td>13/11/2023</td>
                            <td>13/12/2023</td>
                        </tr>
                        <tr>
                            <td>Jason Funderburker</td>
                            <td>O mistério do 5 estrelas</td>
                            <td>10/10/2023</td>
                            <td>27/11/2023</td>
                        </tr>
                        <tr>
                            <td>Beatrice</td>
                            <td>O mistério do 5 estrelas</td>
                            <td>10/10/2023</td>
                            <td>27/11/2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </main>
</template>




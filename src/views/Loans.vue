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
        <div class="container">
            <div class="card-profile py-4 px-4">
                <table class="table">
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
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </main>
</template>

<style lang="scss">

    $light-color: #e7e8ee;
    $primary-color: #5a6794;
    $secondary-color: #8794c0;
    $emphasis-color: #d8cdb0;
    $dark-color: #1c2135;

    .table{
        border-top: none!important;
        width: 100%;
        border-collapse:separate;
        border-spacing: 0 10px;
        border-top: 3px solid $secondary-color;
        thead{
            th{
                border: none;
                padding: 30px;
                font-size: 14px;
            }
            tr{
                text-align: center;
                color: #000;
            }
        }
        tbody{
            tr{
                text-align: center;
                margin-bottom: 10px;
                border-bottom: 1px solid $dark-color;
                &:nth-child(even) {
                    background-color: $secondary-color;
                }
            }
            th,td{
                border: none;
                padding:30px;
                font-size: 14px;
                background: #fff;
            }
            td{
                .close{
                    span{
                        font-size: 12px;
                        color: red;
                    }
                }
            }
        }
    }
</style>



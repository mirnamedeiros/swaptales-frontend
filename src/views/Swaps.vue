<script>
import NavBar from '../components/Navbar.vue'
import BookSwap from '../components/BookSwap.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'Viewbooks',
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
                swaps: []
            }
        },
        mounted(){
            let id = localStorage.getItem('currentUser');
            this.findExchanges(id);
        },
        methods: {

            findExchanges(id){
            fetch(`http://localhost:8080/swaptales/api/transactions/exchange/user/${id}`, {
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
                        this.swaps = JSON.parse(data);
                        console.log(this.swaps);
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
        },
        },
    }

</script>

<template>
    <main>
        <NavBar/>
        <div class="container d-flex flex-column align-items-center mt-5">
            <div>
                <h2>Trocas de Livros</h2>
            </div>
            <BookSwap v-for="swap in swaps"
            :key="swap.id"
            :imagePath1="swap.book.urlImg"
            :imagePath2="swap.bookExchange.urlImg"
            :user1Name="swap.book.ownerUser.name"
            :user1Image="swap.book.ownerUser.urlImg"
            :user2Name="swap.user.name"
            :user2Image="swap.user.urlImg"
            :exchange-date="swap.dateTransaction"
            :titleBook1="swap.book.title"
            :authorBook1="swap.book.author"
            :titleBook2="swap.bookExchange.title"
            :authorBook2="swap.bookExchange.author"/>
        </div>
        <Footer/>
    </main>
</template>



<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Profile',
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            user : {
                name: "",
                cpf: "",
                email: "",
                telephone: "",
                username: "",
                urlImg: "",
                countFollowers: "",
            },
            books: [{
                urlImg: "",
                title: "",
            }],
            countBorrowed: 0,
            countExchanges: 0,
            countSold: 0,
            idCurrentUser: "",
            id: "",
            activeGroupIndex: 0,
            itemsPerGroup: 3,
            reviews: [ {
                stars: '',
                book: {
                    title: ''
                }
            }]
        }
    },
    computed: {
        bookGroups() {
        const groups = [];
        for (let i = 0; i < this.books.length; i += this.itemsPerGroup) {
            groups.push(this.books.slice(i, i + this.itemsPerGroup));
        }
        return groups;
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.idCurrentUser = localStorage.getItem('currentUser');
        this.findUser(this.id);
        this.findBorrowed(this.id);
        this.findExchanges(this.id);
        this.findSold(this.id);
        this.findBooks(this.id);
        this.getListReviewsByUser(this.id)
      },

    methods: {
        findUser(id){
            
            fetch(`http://localhost:8080/swaptales/api/users/${id}`, {
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
                        this.setUser(JSON.parse(data))
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
        },

        setUser(data){
            this.user.name = data.name;
            this.user.cpf = data.cpf;
            this.user.email = data.email;
            this.user.telephone = data.telephone;
            this.user.username = data.username;
            this.user.urlImg = data.urlImg;
            this.user.countFollowers = data.followers.length;
        },

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
                        this.countBorrowed = JSON.parse(data).length;
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
        },

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
                        this.countExchanges = JSON.parse(data).length;
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
        },

        findSold(id){
            fetch(`http://localhost:8080/swaptales/api/transactions/sale/all-sold/${id}`, {
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
                        this.countSold = JSON.parse(data).length;
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
        },
        findBooks(id){
            fetch(`http://localhost:8080/swaptales/api/books/user/${id}`, {
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
                        this.books = JSON.parse(data);
                        
                    }else{
                        console.log("Usuario não encontrado");
                    }
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                });
        },
        redirectEditUser(){
            this.$router.push('/editUser/');
        },
        nextSlide() {
            this.activeGroupIndex = (this.activeGroupIndex + 1) % this.bookGroups.length;
        },
        prevSlide() {
            this.activeGroupIndex = (this.activeGroupIndex - 1 + this.bookGroups.length) % this.bookGroups.length;
        },
        getListReviewsByUser(id){
            fetch(`http://localhost:8080/swaptales/api/reviews/user/${id}`, {
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
                        this.reviews = JSON.parse(data);
                        
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
        <div class="container mt-5 d-flex justify-content-center flex-column align-items-center">
            <div class="card-profile p-3">
                <div class="d-flex align-items-center">
                    <div class="image">
                        <img :src="user.urlImg"
                            class="m-2" width="155">
                    </div>
                    <div class="ml-3 w-100">
                        <h4 class=" mx-2 mb-0 mt-0">{{user.name}}</h4>
                        <div class="p-2 m-2 d-flex justify-content-between rounded stats">
                            <!--div class="p-1 d-flex flex-column align-items-center">
                                <span class="articles">Lidos</span>
                                <span class="number1">25</span>
                            </div-->
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="articles">Vendidos</span>
                                <span class="number1">{{ countSold }}</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">

                                <span class="followers">Trocados</span>
                                <span class="number2">{{ countExchanges }}</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="rating">Emprestados</span>
                                <span class="number3">{{ countBorrowed }}</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="articles">Seguidores</span>
                                <span class="number1">{{ user.countFollowers }}</span>
                            </div>
                        </div>
                        <div class="button mt-2 d-flex flex-row align-items-center">
                                <button v-if="id==idCurrentUser" class="btn btn-sm btn-primary w-100 mx-2" @click="redirectEditUser">
                                    Editar
                                </button>
                                <button v-if="id!=idCurrentUser" class="btn btn-sm btn-primary w-100 ml-2 mx-2">Seguir</button>
                        </div>
                    </div>
                </div>
                <div class="my-3 separate">
                    <div class="my-5 text-center">
                        <div class="row d-flex align-items-center">
                            <div class="col-1 d-flex align-items-center justify-content-center">
                                <a href="#carouselExampleIndicators" role="button" data-slide="prev" @click.prevent="prevSlide">
                                    <div class="carousel-nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
                                    </svg>
                                    </div>
                                </a>
                            </div>
                            <div class="col-10">
                                <!--Start carousel-->
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                    <div v-for="(group, index) in bookGroups" :key="index" class="carousel-item" :class="{ active: index === activeGroupIndex }">
                                        <div class="row">
                                        <div v-for="(book, bookIndex) in group" :key="bookIndex" class="col-4 d-flex align-items-center justify-content-center">
                                            <img :src="book.urlImg" alt="Book Cover" width="155">
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <!--End carousel-->
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-center">
                                <a  href="#carouselExampleIndicators" data-slide="next" @click.prevent="nextSlide">
                                    <div class="carousel-nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                                    </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <a href="/add" class="align-self-center mb-3">
                        <button type="button" class="btn btn-primary">
                            <i class="fa-solid fa-plus pr-2"></i>
                            <span class="p-2 text-decoration-none">ADICIONAR LIVRO</span>
                        </button>
                    </a>
            </div>
            <div class="card-profile py-4 px-4" v-if="reviews.length > 0">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Reviews</h5>
                    <a href="#" class="btn btn-link text-muted">Mostrar todas</a>
                </div>
                <table class="styled-table" >
                    <thead>
                        <tr>
                            <th>Livro</th>
                            <th>Estrelas</th>
                            <th>Ver mais</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(review, index) in reviews.slice(0, 3)" :key="index">
                            <td>{{ review.book.title}}</td>
                            <td>{{ review.stars}}</td>
                            <td><a href="#" class="icons fa-solid fa-arrow-up-right-from-square fa-lg "></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </main>
</template>


<style lang="scss" scoped>

    table {
        box-shadow: none!important;;
    }

    .stats {
        background: #f2f5f8 !important;
        color: #000 !important;
    }

    .articles {
        font-size: 10px;
        color: #a1aab9;
    }

    .number1 {
        font-weight: 500;
    }

    .followers {
        font-size: 10px;
        color: #a1aab9;

    }

    .number2 {
        font-weight: 500;
    }

    .rating {
        font-size: 10px;
        color: #a1aab9;
    }

    .number3 {
        font-weight: 500;
    }

    .carousel-nav-icon {
    height: 48px;
    width: 48px;
    }
    .carousel-item {
    .col, .col-sm, .col-md {
        margin: 8px;
        height: 250px;
        background-size: cover;
        background-position: center center;
    }
    }

</style>

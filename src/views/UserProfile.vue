<script>
import Footer from '../components/Footer.vue'

export default {
    name: 'Profile',
    components: {
        Footer
    }
}
</script>

<template>
    <main>
        <div class="container mt-5 d-flex justify-content-center flex-column align-items-center">
            <div class="card-profile p-3">
                <div class="d-flex align-items-center">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                            class="m-2" width="155">
                    </div>
                    <div class="ml-3 w-100">
                        <h4 class=" mx-2 mb-0 mt-0">Alex Morisson</h4>
                        <div class="p-2 m-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="articles">Lidos</span>
                                <span class="number1">25</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="articles">Vendidos</span>
                                <span class="number1">12</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">

                                <span class="followers">Trocados</span>
                                <span class="number2">2</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="rating">Emprestados</span>
                                <span class="number3">9</span>
                            </div>
                            <div class="p-1 d-flex flex-column align-items-center">
                                <span class="articles">Seguidores</span>
                                <span class="number1">11</span>
                            </div>
                        </div>
                        <div class="button mt-2 d-flex flex-row align-items-center">
                            <button class="btn btn-sm btn-primary w-100 mx-2">Editar</button>
                            <button class="btn btn-sm btn-primary w-100 ml-2 mx-2">Seguir</button>
                        </div>
                    </div>
                </div>
                <div class="my-3 separate">
                    <div class="my-5 text-center container">
                        <div class="row d-flex align-items-center">
                            <div class="col-1 d-flex align-items-center justify-content-center">
                                <a href="#carouselExampleIndicators" role="button" data-slide="prev">
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
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div style="background-image:url('src/assets/images/a-storm-swords.jpeg');" class="col-12 col-md d-flex align-items-center justify-content-center">
                                            </div>
                                            <div style="background-image:url('src/assets/images/a-feast-of-crows.jpg');" class="col-12 col-md d-flex align-items-center justify-content-center">
                                            </div>
                                            <div style="background-image:url('src/assets/images/a-dance-with-dragons.jpg');" class="col-12 col-md d-flex align-items-center justify-content-center">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div style="background-image:url('src/assets/images/a-storm-swords.jpeg');" class="col-12 col-md d-flex align-items-center justify-content-center">
                                            </div>
                                            <div style="background-image:url('src/assets/images/a-feast-of-crows.jpg');" class="col-12 col-md d-flex align-items-center justify-content-center">
                                            </div>
                                            <div style="background-image:url('src/assets/images/a-dance-with-dragons.jpg');" class="col-12 col-md d-flex align-items-center justify-content-center">
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <!--End carousel-->
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-center">
                                <a  href="#carouselExampleIndicators" data-slide="next">
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
                    <button type="button" class="btn btn-primary col-1 align-self-center mb-3">
                        <i class="fa-solid fa-plus pr-2"></i>
                        <a href="/add" class="p-2 whiteLink">ADICIONAR LIVRO</a>
                    </button>
            </div>
            <div class="card-profile py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Reviews</h5>
                    <a href="#" class="btn btn-link text-muted">Mostrar todos</a>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Livro</th>
                            <th scope="col">Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <th scope="row">A Tormenta de Espadas</th>
                            <td>Oscar Wilde</td>
                        </tr>
                        <tr>
                            <th scope="row">O Festim dos Corvos</th>
                            <td>George R. R. Martin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </main>
</template>


<style>
    .whiteLink{
        text-decoration: none;
        color: #000;
    }

    .card-profile {
        width: 700px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        border: 4px solid #000;
        box-shadow: 8px 8px 0 #a1aab9;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 0;
    }

    .separate {
        border-top: 3px solid #000;
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

<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default{
    name: 'BestBooks',
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            books: [
                {id:1,
                imagePath: "src/assets/images/a-storm-swords.jpeg"},
                {id:2,
                imagePath: "src/assets/images/a-dance-with-dragons.jpg"},
                {id:3,
                imagePath: "src/assets/images/a-feast-of-crows.jpg"},
            ]
        }
    },
}
</script>

<template>
    <NavBar/>
    <div class="container">
        <div class="card-profile py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0">Melhores livros</h5>
                <a href="#" class="text-muted"><i class="fa-solid fa-filter"></i> Filtrar</a>
            </div>
            <div class="podium m-2">
                <div class="podium-item second">
                    <img :src="books[1].imagePath" alt="Book 2 Place Image" class="book-image" />
                </div>
                <div class="podium-item first">
                    <img :src="books[0].imagePath" alt="Book 1 Place Image" class="book-image" />
                </div>
                <div class="podium-item third">
                    <img :src="books[2].imagePath" alt="Book 3 Place Image" class="book-image" />
                </div>
            </div>
            <div class="separate"></div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Posição</th>
                        <th scope="col">Livro</th>
                        <th scope="col">Autor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-active">
                        <td>4</td>
                        <td scope="row">A Tormenta de Espadas</td>
                        <td>Oscar Wilde</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td scope="row">O Festim dos Corvos</td>
                        <td>George R. R. Martin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss">

    $light-color: #e7e8ee;
    $primary-color: #5a6794;
    $secondary-color: #8794c0;
    $emphasis-color: #d8cdb0;
    $dark-color: #1c2135;
    
    .container {
        display: flex;
        justify-content: center;
    }
    .card-profile {
        width: 700px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        border: 4px solid #000;
        box-shadow: 8px 8px 0 $secondary-color;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 0;

        h5 {
            color: $primary-color;
        }
           
        a {
            text-decoration: none;
            color: #000;
            color: $secondary-color!important;
            i {
                color: $secondary-color;
            }
        }
    }

    .podium {

        display: flex;
        justify-content: space-around;
        .book-image {
            width: 180px;
            height: 260px;
            padding: 10px;
            object-fit: cover;
        }
    }

    .table{
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
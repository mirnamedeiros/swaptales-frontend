<script>
import NavBar from '../components/Navbar.vue'
import BookPodium from '../components/BookPodium.vue'
import Footer from '../components/Footer.vue'

export default{
    name: 'BestBooks',
    components: {
        NavBar,
        BookPodium,
        Footer
    },
    data() {
        return {
            books: [
                {id:1,
                imagePath:"src/assets/images/a-feast-of-crows.jpg",
                author:"George R. R. Martin",
                title:"A Feast for Crows",
                text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                goal:1,
                link:"#"},
                {id:2,
                imagePath:"src/assets/images/a-clash-of-kings.jpg",
                author:"George R. R. Martin",
                title:"A Clash Of Kings",
                text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                goal:2,
                link:"#"},
                {id:3,
                imagePath:"src/assets/images/a-dance-with-dragons.jpg",
                author:"George R. R. Martin",
                title:"A Dance With Dragons",
                text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                goal:3,
                link:"#"},
                {id:4,
                imagePath:"src/assets/images/a-storm-swords.jpeg",
                author:"George R. R. Martin",
                title:"A Storm of Swords",
                text:"The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.",
                goal:2,
                link:"#"}
            ]
        }
    },
}
</script>

<template>
    <NavBar/>
    <div class="container">
        <div class="card-profile py-4 px-4 d-flex justify-content-center w-100">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h3 class="mb-0">Melhores Livros</h3>
            </div>
            <div class="podium mb-4 d-flex justify-content-around">
                <BookPodium v-for="(book, index) in books.slice(0, 3)"
                :key="book.id"
                :id="index"
                :imagePath="book.imagePath"
                :author="book.author"
                :title="book.title"
                :text="book.text"
                :goal="book.goal"
                :link="book.link"/>
            </div>
            <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Livro</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>A Tormenta de Espadas</td>
                            <td>Oscar Wilde</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>O Festim dos Corvos</td>
                            <td>George R. R. Martin</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>

    $light-color: #e7e8ee;
    $primary-color: #5a6794;
    $secondary-color: #8794c0;
    $emphasis-color: #d8cdb0;
    $dark-color: #1c2135;
    $white: #fff;

    .container {
        display: flex;
        justify-content: center;
        max-width: 70%;
    }

    table {
        box-shadow: none;
    }

    .podium {

        display: flex;
        justify-content: space-between;
        .book-image {
            width: 180px;
            height: 260px;
            object-fit: cover;
        }
    }

</style>
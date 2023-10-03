<template>
    <main>
        <Navbar />
        <div class="container my-5">
            <div class="row">
                <div class="col-md-12 d-flex flex-column">
                        <a href="/add" class="btn btn-primary col-2">Add book</a>
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
</script>
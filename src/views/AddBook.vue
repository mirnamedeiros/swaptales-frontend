<template>
    <main>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Add Book</h2>
              <form @submit.prevent="addBook">
                <!--Title-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input id="title"  type="text" name="title" class="form-control" placeholder="Title" required v-model="book.title">
                  </div>
                </div>

                
                <!--Author-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="author" class="form-label">Author</label>
                      <input id="author" type="text"  name="author" class="form-control" placeholder="author" required v-model="book.Author" >
                    </div>
                  </div>
               
                
               
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
      
                <div>
                  
                </div>
              </form>
        
            </div>
          </div>
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

    export default {
        name: 'AddBook',
        components: {
            Navbar
        },

        data() {
            return {
                book : {
                    title: '',
                    Author: '',
                }
            }
        },

        methods: {
            addBook(){
                fetch('http://localhost:8080/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.Book)
                })
                .then(data => {
                    console.log(data)
                    this.$router.push("/");
                })

            }
        },
            
    }


</script>